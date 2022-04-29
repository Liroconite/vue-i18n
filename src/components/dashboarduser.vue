<template>
  <div class="updiv">
    <p>user dashboard</p>

    <!-- upload -->
    <div class="uploadcontainer">
      <el-upload
        class="upload-demo"
        drag
        action=""
        :auto-upload="false"
        v-model="rulefile.picture"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          Déposer les fichiers ici ou<em>cliquez pour envoyer</em>
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
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="Date" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Nom" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>Nom: {{ scope.row.name }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="Opérations">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >Editer</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Supprimer</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { getStorage, storageRef, createStorage } from "firebase/storage";

export default {
  data() {
    return {
      tableData: [
        {
          date: "",
          name: "",
        },
      ],
      rulefile: {
        imageData: "",
        picture: "",
      },
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },

    // previewImage(event) {
    //   this.rulefile.picture = null;
    //   this.rulefile.imageData = event.target.file[0];
    // },

    async onUpload() {
      this.rulefile.picture = null;
      const storage = getStorage();
      const storageRef = createStorage(
        storage,
        this.rulefile.imageData,
        this.rulefile.picture
      );

      const useh = storageRef.useh;

      try {
        nonExistentFunction();
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
      }
    },
  },
};
</script>
<style scoped>
</style>
