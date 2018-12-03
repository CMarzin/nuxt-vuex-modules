<template>
    <a @click="handleClick" :href="href" :class="'button ' + type">
        {{label}}
    </a>
</template>

<script>
    export default
    {
        name: 'appButton',
        props: {
            href: {default: '#', type: String},
            type: {default: 'square', type: String},
            label: {default: 'Button', type: String},
            owner: Object,
            call: String
        },
        methods: {
            handleClick(responder)
            {
                if (typeof this.owner !== 'undefined' && typeof this.call !== 'undefined') {
                    this.owner[this.call]()
                    responder.preventDefault()
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .button {
        margin: 0 auto;
        padding: 5px 10px;
        margin-top: 25px;
        border: 1px solid blue;
        text-decoration: none;
    }

    .button:hover {
        background-color: blue;
        color: #fff;
    }

    .button.danger:hover {
        background-color: #fff;
        color: #ff0000;
    }

    .round {
        border-radius: 15px;
    }

    .square {
        border-radius: 0;
    }

    .danger {
        background-color: #ff0000;
        border-color: #ff0000;
        color: #ffffff;
    }
</style>