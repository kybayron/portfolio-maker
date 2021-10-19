<template>

<div id="app">
  <div class="half left">
    <div class="placeholderasset"><div></div></div>
  </div>

  <div class="half right">

    <form v-if="auth">
    <!-- <form> -->
      <h2>About.</h2>
      <!-- NAME - TITLE - BIO - EDUCATION -->
      <div class="form-group"> 
        <label for="name">NAME</label>
        <input type="text" v-model="fullName" class="form-control" id="name" placeholder="Juan dela Cruz">
      </div>
      <div class="form-group">
        <label for="title">TITLE</label>
        <input type="text" v-model="title" class="form-control" id="title" placeholder="Cadet Engineer">
      </div>
      <div class="form-group">
        <label for="bio">BIO</label>
        <textarea class="form-control" v-model="description" id="bio" rows="3" placeholder="Tell the world about yourself"></textarea>
      </div>
      <div class="form-group">
        <label for="education">EDUCATION</label>
        <input type="text" v-model="education" class="form-control" id="education" placeholder="XYZ University">
      </div>

      <h2>Achievements.</h2>
      <!-- ARRAY OF ACHIEVEMENT TITLES AND DESCRIPTIONS -->
      <!-- ACH 1 -->
      <p>ACHIEVEMENT 1</p>
      <div class="form-row">
        <div class="col">
          <input type="text" v-model="achievements[0].title" class="form-control" id="ach-header-1" placeholder="XYZ Award">
        </div>
        <div class="col">
          <input type="text" v-model="achievements[0].year" class="form-control" id="ach-year-1" placeholder="20XX">
        </div>
      </div>
      <div class="form-group">
        <textarea class="form-control" v-model="achievements[0].description" id="ach-desc-1" rows="3" placeholder="Tell the world about yourself"></textarea>
      </div>
      <!-- ACH 2 -->
      <p>ACHIEVEMENT 2</p>
      <div class="form-row">
        <div class="col">
          <input type="text" v-model="achievements[1].title" class="form-control" id="ach-header-2" placeholder="XYZ Honors">
        </div>
        <div class="col">
          <input type="text" v-model="achievements[1].year" class="form-control" id="ach-year-2" placeholder="20XX">
        </div>
      </div>
      <div class="form-group">
        <textarea class="form-control" v-model="achievements[1].description" id="ach-desc-2" rows="3" placeholder="Tell the world about yourself"></textarea>
      </div>
      <!-- ACH 3 -->
      <p>ACHIEVEMENT 3</p>
      <div class="form-row">
        <div class="col">
          <input type="text" v-model="achievements[2].title" class="form-control" id="ach-header-3" placeholder="XYZ Honors">
        </div>
        <div class="col">
          <input type="text" v-model="achievements[2].year" class="form-control" id="ach-year-3" placeholder="20XX">
        </div>
      </div>
      <div class="form-group">
        <textarea class="form-control" v-model="achievements[2].description" id="ach-desc-3" rows="3" placeholder="Tell the world about yourself"></textarea>
      </div>

      <h2>Professional Experience.</h2>
      <!-- ARRAY OF JOB TITLES AND EXPERIENCES -->
      <!-- JOB 1 -->
          <p>JOB 1</p>
      <div class="form-row">
        <div class="col">
          <input type="text" v-model="jobExperience[0].title" class="form-control" id="job-header-1" placeholder="Cadet Engineer">
        </div>
        <div class="col">
          <input type="text" v-model="jobExperience[0].year" class="form-control" id="job-year-1" placeholder="2021-present">
        </div>
      </div>
      <div class="form-group">
        <textarea class="form-control" v-model="jobExperience[0].description" id="job-desc-1" rows="3" placeholder="Tell the world about yourself"></textarea>
      </div>
      <!-- JOB 2 -->
          <p>JOB 2</p>
      <div class="form-row">
        <div class="col">
          <input type="text" v-model="jobExperience[1].title" class="form-control" id="job-header-2" placeholder="Cadet Engineer">
        </div>
        <div class="col">
          <input type="text" v-model="jobExperience[1].year" class="form-control" id="job-year-2" placeholder="XYZ Job">
        </div>
      </div>
      <div class="form-group">
        <textarea class="form-control" v-model="jobExperience[1].description" id="job-desc-2" rows="3" placeholder="Tell the world about yourself"></textarea>
      </div>
      <!-- JOB 3 -->
          <p>JOB 3</p>
      <div class="form-row">
        <div class="col">
          <input type="text" v-model="jobExperience[2].title" class="form-control" id="job-header-3" placeholder="XYZ Job">
        </div>
        <div class="col">
          <input type="text" v-model="jobExperience[2].year" class="form-control" id="job-year-3" placeholder="20XX">
        </div>
      </div>
      <div class="form-group">
        <textarea class="form-control" v-model="jobExperience[2].description" id="job-desc-3" rows="3" placeholder="Tell the world about yourself"></textarea>
      </div>

      <h2>Contact.</h2>
      <!-- ARRAY OF JOB TITLES AND EXPERIENCES -->
      <div class="form-group"> 
        <label for="contact">CONTACT NO.</label>
        <input type="text" v-model="contactNo" class="form-control" id="contact" placeholder="+639XXXXXXXXX">
      </div>
      <div class="form-group"> 
        <label for="email">EMAIL</label>
        <input type="text" v-model="email" class="form-control" id="email" placeholder="jdl@email.com">
      </div>
      <div class="form-group"> 
        <label for="name">SOCIALS</label>
        <input type="text" v-model="socials" class="form-control" id="socials" placeholder="Linkedin/IG/etc">
      </div>

      <div class="form-group"> 
        <label for="name">GOOGLEID (TEMPORARY this must be removed)</label>
        <input type="text" v-model="googleId" class="form-control" id="name" placeholder="123">
      </div>

      <!-- NEET 2 MAKE SUBMIT BUTTON -->
      <!-- <button type="submit" class="btn">Create Portfolio</button> -->
      <a class="btn" v-on:click="postPortfolio" a v-bind:href="'/portfolio/'+this.googleId">Create Portfolio!</a>


    </form>
    <!-- RENDERS IF NOT AUTHENTICATED -->
    <div v-if="!auth">
      <h3>Unauthorized. Please login to create a portfolio.</h3>
      <a href="/" class="btn">Go Back</a>
    </div>

  </div>

</div>




</template>

<script>
// STYLESHEET/S
import '../../public/style.scss'
// COMPONENTS
import axios from 'axios'
const baseURL = "http://localhost:5000/api/portfolio/"

export default {
  name: 'Form',
  components: {
  },
  data() {
    return {
      //AUTHENTICATION TOKEN
      auth: '',
      //
      googleId: '',
      fullName: '',
      title: '',
      contactNo: '',
      email: '',
      description: '',
      achievements: [
        {
        title: '',
        year: '',
        description: ''
        },
        {
        title: '',
        year: '',
        description: ''
        },
        {
        title: '',
        year: '',
        description: ''
        }
      ],
      education: '',
      jobExperience: [
        {
        title: '',
        year: '',
        description: ''
        },
        {
        title: '',
        year: '',
        description: ''
        },
        {
        title: '',
        year: '',
        description: ''
        }
      ],
      socials: ''
    }
  },
  methods: {

    async postPortfolio() {
      const portfolioBody = {
        googleId: this.googleId,
        fullName: this.fullName,
        title: this.title,
        contactNo: this.contactNo,
        email: this.email,
        description: this.description,
        achievements: [
          {
          title: this.achievements[0].title,
          year: this.achievements[0].year,
          description: this.achievements[0].description
          },
          {
          title: this.achievements[1].title,
          year: this.achievements[1].year,
          description: this.achievements[1].description
          },
          {
          title: this.achievements[2].title,
          year: this.achievements[2].year,
          description: this.achievements[2].description
          }
        ],
        education: this.education,
        jobExperience: [
          {
          title: this.jobExperience[0].title,
          year: this.jobExperience[0].year,
          description: this.jobExperience[0].description
          },
          {
          title: this.jobExperience[1].title,
          year: this.jobExperience[1].year,
          description: this.jobExperience[1].description
          },
          {
          title: this.jobExperience[2].title,
          year: this.jobExperience[2].year,
          description: this.jobExperience[2].description
          }
        ],
        socials: this.socials
      }
      const res = await axios.post(baseURL, portfolioBody)
    },
      async getData() {
        try {
          const response = await axios.get(
            "http://localhost:5000/login/auth"
          );
          // JSON responses are automatically parsed.
          console.log(response.data);
         // return response.config;
          return response.data;
        } catch (error) {
          console.log(error)
        }
      }
  },
      async beforeMount() { //RUN CHECK AUTHENTICATION ON LOAD
        try {
          const res = await axios.get('http://localhost:5000/login/auth')
          if(res.data)
           this.auth = true;
          else this.auth = false;  
        } catch (e) {
        console.error(e)
        }
    } 
}
</script>

<style lang="scss" scoped>
  $offwhite: #F7F0F5;
  h3 {
    font-family: 'Roboto Mono';
    color: $offwhite;
  }
</style>

