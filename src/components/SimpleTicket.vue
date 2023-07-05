<template>
    <section>
    <div class="from-ticket">
        <form @submit.prevent="submitData">
        <div class="mb-3">
            <label for="title" class="form-label">Title:</label>
            <input type="text" class="form-control" id="title" v-model="title" required>
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Description:</label>
            <textarea class="form-control" id="description" rows="3" v-model="description" required></textarea>
        </div>

        <div class="mb-3">
            <label for="contact_information" class="form-label">Contact Information:</label>
            <input type="contact_information" class="form-control" id="coninfo" v-model="coninfo" required>
        </div>

        <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3">Submit</button>
        </div>
        </form>
    </div>
    
    <div class="text-start test_log">
        <p>test_log</p>
        <p>Title: {{title}}</p>
        <p>Description: {{description}}</p>
        <p>Contact Information: {{ coninfo }}</p>
    </div>
    </section>
</template>

<script>
import { firestoreCollection, addDoc } from '../firebase/config'

export default{
data() {
    return{
        title: '',
        description: '',
        coninfo: ''
    }
},
methods:{
    // submitData() {
    //   // Create a document in the Firestore collection with the submitted data
    //   firestoreCollection.collection('userTicket').add({
    //     title: this.title,
    //     description: this.description,
    //     coninfo: this.coninfo
    //   })
    //   .then(() => {
    //     // Reset the form after successful submission
    //     this.title = '';
    //     this.description = '';
    //     this.coninfo = '';
    //   })
    //   .catch(error => {
    //     console.error('Error adding document:', error);
    //   });
    // }
    async submitForm() {
      try {
        // Create a document in the Firestore collection with the submitted data
        await addDoc(firestoreCollection, {
          title: this.title,
          description: this.description,
          coninfo: this.coninfo
        });

        // Reset the form after successful submission
        this.title = '';
        this.description = '';
        this.coninfo = '';
      } catch (error) {
        console.error('Error adding document:', error);
      }
    }

}
}
</script>

<style>
.from-ticket{
    margin: 0 500px;
}
.test_log{
    margin: 100px 0px 0px 0px;
}
</style>
