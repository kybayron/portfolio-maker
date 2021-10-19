<template>

<div class="scroll-creds">
    <h2>Education.</h2>
    <h3>{{portfolio.education}}</h3>
    <h2>Achievements.</h2>
      <li v-for="achievement of portfolio.achievements" :key="achievement">
        <h3>{{achievement.title}} {{achievement.year}}</h3>
        <p>{{achievement.description}}</p>
        </li>
   
    <h2>Professional Experience. {{id}}</h2>
      <li v-for="job of portfolio.jobExperience" :key="job">
        <h3>{{job.title}} {{job.year}}</h3>
        <p>{{job.description}}</p>
        </li>

</div>

</template>

<script>
// STYLESHEET/S
import '../../public/style.scss'
import axios from 'axios'
const baseURL = "http://localhost:5000/portfolio/"

export default {
    name: 'CredsOne',
    props: ['id'],
    data() {
        return {
        portfolio: {},
        googleId: this.id
        }
    }, 
    async created() {
        try {
        const res = await axios.get(baseURL+this.googleId)
        this.portfolio = res.data
        } catch (e) {
        console.error(e)
        }
    }
}
</script>