<template>
    <div class="calendar">
        <div class="calendar-header">
            <Button @click="prevMonth" label="Previous" class="bg-amber-600 text-white" />
            <h2>{{ month }} {{ year }}</h2>
            <Button @click="nextMonth" label="Next" class="bg-amber-600 text-white" />
            
        </div>
        <div class="calendar-grid">
            <div class="day" v-for="day in days" :key="day">{{ day }}</div>
            <div class="date" v-for="date in calendarDays" :key="date.date">
                {{ date.date }}
            </div>
        </div>
    </div>
</template>

<script>
import Button from './Button.vue';

export default {
    components: {
        Button,
    },
    data() {
        return {
            currentDate: new Date(),
            days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        };
    },
    computed: {
        month() {
            return this.currentDate.toLocaleString('default', { month: 'long' });
        },
        year() {
            return this.currentDate.getFullYear();
        },
        calendarDays() {
            const startOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
            const endOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0);
            const days = [];
            for (let i = 1; i <= endOfMonth.getDate(); i++) {
                days.push({ date: i });
            }
            return days;
        },
    },
    methods: {
        prevMonth() {
            this.currentDate.setMonth(this.currentDate.getMonth() - 1);
            this.currentDate = new Date(this.currentDate);
        },
        nextMonth() {
            this.currentDate.setMonth(this.currentDate.getMonth() + 1);
            this.currentDate = new Date(this.currentDate);
        },
    },
};
</script>

<style scoped>
.calendar {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    background-color: #f9f9f9; /* Add background color */
    padding: 20px; /* Add padding */
    border-radius: 10px; /* Optional: Add rounded corners */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add a subtle shadow */
}
.calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
.calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
}
.day, .date {
    padding: 10px;
    border: 1px solid #ddd;
}
</style>