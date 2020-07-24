window.mainVue = new Vue({
    el: 'main',
    data: {
        tab: 'main',
        loop: true,
        audioSrc: ''
    },
    methods: {
        btnClick(n) {
            this.audioSrc = 'sources/music/' + this.tab + '/' + n + '.mp3';
        }
    }
})

new Vue({
    el: '#sidebar',
    methods: {
        onSel(t) {
            mainVue.audioSrc = '';
            mainVue.tab = t;
        }
    }
})
