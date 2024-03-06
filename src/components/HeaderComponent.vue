<script setup>
    import LangSelectComponent from '@/components/LangSelectComponent.vue';

</script>

<template>
    <header>
        <div class='container'>
            <div class='container-logo'>
                <img src='/src/assets/images/logo.png' alt='logo'>
            </div>
            <nav class='container-nav'>
                <ul>
                    <li class='hover'>información</li>
                    <li class='hover'>otrososo</li>
                    <LangSelectComponent/>
                </ul>
                <div class='container-info'>
                    <img src='/src/assets/images/logo.png' alt='info'>
                </div>
            </nav>
        </div>
    </header>
</template>

<style lang='scss' scoped>
    @import '@/assets/style.scss';

    header{
        // size
        width: 100%;
        height: 7.5%;

        // display
        @include flex(row, flex-end);

        .container{
            // size
            width: 90%;
            height: 60%;

            // display
            @include flex(row, center, space-between);

            &-logo{
                // size
                height: 100%;

                // decoration
                cursor: pointer;

                img{
                    // size
                    width: 100%;
                    height: 100%;
                }
            }

            &-nav{
                // size
                height: 100%;

                // display
                @include flex(row, center, space-between, 5rem);

                ul{
                    // display
                    @include flex(row, center, center, 1rem);
                    
                    .hover{
                        // position
                        position: relative;

                        // decoration
                        cursor: pointer;

                        &::after{
                            align-self: flex-start;
                            position: absolute;
                            content: '';
                            width: 0%;
                            height: 2px;
                            bottom: 0;
                            right: 0;
                            background-color: $h-c-black;
                            visibility: hidden;
                            transform: translateY(2px);
                            transition: all 0.2s;
                        }

                        &:hover{
                            &::after{
                                left: 0;
                                width: 100%;
                                visibility: visible;
                                transition: all 0.2s;
                            }
                        }
                    }
                }

                .container-info{
                    // size
                    height: 100%;
                    
                    // decoration
                    cursor: pointer;

                    img{
                        // size
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
</style>