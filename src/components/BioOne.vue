<template>

        <div class="card-bio">
            <h1>{{portfolio.fullName}}</h1>
            <h3>{{portfolio.title}}</h3>
            <h2>{{portfolio.description}}</h2>
            <br>
            <h3>Interested? Catch me at:</h3>
            <p>{{portfolio.email}}</p>
            <p>{{portfolio.contactNo}}</p>
            <p>{{portfolio.socials}}</p>
        </div>

</template>

<script>
// STYLESHEET/S
import '../../public/style.scss'
import axios from 'axios'
const baseURL = "http://localhost:5000/portfolio/"

export default {
    name: 'BioOne',
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