<template>
  <div class="updiv">
    <!-- upload -->
    <div class="uploadcontainer" slot="file">
      <el-upload
        ref="upload"
        class="mx-4 flex-grow"
        drag
        action="https://"
        :file-list="fileList"
        :on-change="handleChanged"
        :on-remove="handleRemoved"
        :auto-upload="false"
        :show-file-list="true"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          {{ $t("deposer") }}<em>{{ $t("cliquerici") }}</em>
        </div>
        <div class="el-upload__tip" slot="tip">
          Fichiers jpg/png avec une taille inférieure à 500kb
        </div>
      </el-upload>
      <el-button
        style="margin-left: 10px"
        size="small"
        type="success"
        @click="onUpload('rulefile')"
        >Envoyer au serveur</el-button
      >
    </div>

    <!-- table -->
    <h2>{{ $t("Vos_Fichier") }}</h2>
    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column :label="$t('datetable')" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('docname')" width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>{{ $t("docname") }}: {{ scope.row.title }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.title }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column :label="$t('operation')">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleChanged(scope.$index, scope.row)"
              >{{ $t("editer") }}</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleRemoved(scope.$index, scope.row)"
              >{{ $t("supression") }}</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>
<script>
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import {
  getFirestore,
  addDoc,
  collection,
  QuerySnapshot,
} from "firebase/firestore";

export default {
  data() {
    return {
      fileList: [],
      tableData: [
        {
          date: "",
          name: "",
        },
      ],
    };
  },
  methods: {
    handleChanged(file, fileList) {
      this.selectedFiles = fileList.map((f) => f.raw);
      console.log(file);
    },
    handleRemoved(file, fileList) {
      this.selectedFiles = fileList.map((f) => f.raw);
    },

    async onUpload() {
      const storage = getStorage();
      const db = getFirestore();
      const storageRef = ref(storage, "user/image.jpg");
      const file = this.selectedFiles[0];
      const snapshot = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      const title = document.getElementById("file").files[0].name;
      const current_timestamp = new Date().getTime();
      const date = new Date(current_timestamp);
      const docRef = await addDoc(collection(db, "factures"), {
        title: title,
        date: date,
        url: url,
      });
      console.log(title);
      console.log("Document written with ID: ", docRef.id);
      console.log(url);
    },
  },
};
</script>
<style scoped>
</style>
