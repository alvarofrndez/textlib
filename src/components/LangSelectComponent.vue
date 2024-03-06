<script setup>

    const langs = [
        {
            text: 'Español',
            value: 'spain'
        },
        {
            text: 'Inglés',
            value: 'english'
        },
        {
            text: 'Italiano',
            value: 'italian'
        }
    ]
</script>

<template>
    <li>
        <select name='lang' id='lang'>
            <option v-for='lang of langs' value='lang.value'>
                {{ lang.text }}
            </option>
        </select>
    </li>
</template>

<style lang='scss' scoped>
    @import '@/assets/style.scss';

    li{
        select{
            @include dropbox();
        }
    }
</style>