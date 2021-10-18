<template>

<div id="app">
  <div class="half left">
    <div class="placeholderasset"><div></div></div>
  </div>

  <div class="half right">

    <form>
      <h2>About.</h2>
      <!-- NAME - TITLE - BIO - EDUCATION -->
      <div class="form-group"> 
        <label for="name">NAME</label>
        <input type="text" class="form-control" id="name" placeholder="Juan dela Cruz">
      </div>
      <div class="form-group">
        <label for="title">TITLE</label>
        <input type="text" class="form-control" id="title" placeholder="Cadet Engineer">
      </div>
      <div class="form-group">
        <label for="bio">BIO</label>
        <textarea class="form-control" id="bio" rows="3" placeholder="Tell the world about yourself"></textarea>
      </div>
      <div class="form-group">
        <label for="education">EDUCATION</label>
        <input type="text" class="form-control" id="education" placeholder="XYZ University">
      </div>

      <h2>Achievements.</h2>
      <!-- ARRAY OF ACHIEVEMENT TITLES AND DESCRIPTIONS -->
      <!-- ACH 1 -->
      <p>ACHIEVEMENT 1</p>
      <div class="form-row">
        <div class="col">
          <input type="text" class="form-control" id="ach-header-1" placeholder="XYZ Award">
        </div>
        <div class="col">
          <input type="text" class="form-control" id="ach-year-1" placeholder="20XX">
        </div>
      </div>
      <div class="form-group">
        <textarea class="form-control" id="ach-desc-1" rows="3" placeholder="Tell the world about yourself"></textarea>
      </div>
      <!-- ACH 2 -->
      <p>ACHIEVEMENT 2</p>
      <div class="form-row">
        <div class="col">
          <input type="text" class="form-control" id="ach-header-2" placeholder="XYZ Honors">
        </div>
        <div class="col">
          <input type="text" class="form-control" id="ach-year-2" placeholder="20XX">
        </div>
      </div>
      <div class="form-group">
        <textarea class="form-control" id="ach-desc-2" rows="3" placeholder="Tell the world about yourself"></textarea>
      </div>
      <!-- ACH 3 -->
      <p>ACHIEVEMENT 3</p>
      <div class="form-row">
        <div class="col">
          <input type="text" class="form-control" id="ach-header-3" placeholder="XYZ Honors">
        </div>
        <div class="col">
          <input type="text" class="form-control" id="ach-year-3" placeholder="20XX">
        </div>
      </div>
      <div class="form-group">
        <textarea class="form-control" id="ach-desc-3" rows="3" placeholder="Tell the world about yourself"></textarea>
      </div>

      <h2>Professional Experience.</h2>
      <!-- ARRAY OF JOB TITLES AND EXPERIENCES -->
      <!-- JOB 1 -->
          <p>JOB 1</p>
      <div class="form-row">
        <div class="col">
          <input type="text" class="form-control" id="job-header-1" placeholder="Cadet Engineer">
        </div>
        <div class="col">
          <input type="text" class="form-control" id="job-year-1" placeholder="2021-present">
        </div>
      </div>
      <div class="form-group">
        <textarea class="form-control" id="job-desc-1" rows="3" placeholder="Tell the world about yourself"></textarea>
      </div>
      <!-- JOB 2 -->
          <p>JOB 2</p>
      <div class="form-row">
        <div class="col">
          <input type="text" class="form-control" id="job-header-2" placeholder="Cadet Engineer">
        </div>
        <div class="col">
          <input type="text" class="form-control" id="job-year-2" placeholder="XYZ Job">
        </div>
      </div>
      <div class="form-group">
        <textarea class="form-control" id="job-desc-2" rows="3" placeholder="Tell the world about yourself"></textarea>
      </div>
      <!-- JOB 3 -->
          <p>JOB 3</p>
      <div class="form-row">
        <div class="col">
          <input type="text" class="form-control" id="job-header-3" placeholder="XYZ Job">
        </div>
        <div class="col">
          <input type="text" class="form-control" id="job-year-3" placeholder="20XX">
        </div>
      </div>
      <div class="form-group">
        <textarea class="form-control" id="job-desc-3" rows="3" placeholder="Tell the world about yourself"></textarea>
      </div>

      <h2>Contact.</h2>
      <!-- ARRAY OF JOB TITLES AND EXPERIENCES -->
      <div class="form-group"> 
        <label for="contact">CONTACT NO.</label>
        <input type="text" class="form-control" id="contact" placeholder="+639XXXXXXXXX">
      </div>
      <div class="form-group"> 
        <label for="email">EMAIL</label>
        <input type="text" class="form-control" id="email" placeholder="jdl@email.com">
      </div>
      <div class="form-group"> 
        <label for="name">SOCIALS</label>
        <input type="text" class="form-control" id="socials" placeholder="Linkedin/IG/etc">
      </div>

      <!-- NEET 2 MAKE SUBMIT BUTTON -->
      <!-- <button type="submit" class="btn">Create Portfolio</button> -->
      <a class="btn" href="/portfolio">Create Portfolio!</a>


    </form>

  </div>

</div>




</template>

<script>
// STYLESHEET/S
import '../../public/style.scss'
// COMPONENTS

export default {
  name: 'Form',
  components: {

  }
}
</script>

<style scoped>

</style>

