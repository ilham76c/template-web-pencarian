// Data article

const article = {
    'css' : { 
        title : 'Cascading Style Sheets',
        url : 'https://id.wikipedia.org/wiki/Cascading_Style_Sheets',
        description : 'Cascading Style Sheet merupakan aturan untuk mengatur beberapa komponen dalam sebuah web sehingga akan lebih terstruktur dan seragam. CSS bukan merupakan bahasa pemograman.'
    },
    'html' : {
        title : 'HTML - Wikipedia',
        url : 'https://id.wikipedia.org/wiki/HTML',
        description : 'Hypertext Markup Language adalah sebuah bahasa markah yang digunakan untuk membuat sebuah halaman web, menampilkan berbagai informasi di dalam sebuah penjelajah web Internet dan pemformatan hiperteks sederhana yang ditulis dalam berkas format ASCII agar dapat menghasilkan tampilan wujud yang terintegrasi.'
    },
    'javascript' : {
        title : 'JavaScript',
        url : 'https://id.wikipedia.org/wiki/JavaScript',
        description : 'JavaScript adalah bahasa pemrograman tingkat tinggi dan dinamis. JavaScript populer di internet dan dapat bekerja di sebagian besar penjelajah web populer seperti Google Chrome, Internet Explorer, Mozilla Firefox, Netscape dan Opera. Kode JavaScript dapat disisipkan dalam halaman web menggunakan tag SCRIPT.'
    },
    'typescript' : {
        title : 'TypeScript',
        url : 'https://en.wikipedia.org/wiki/TypeScript',
        description : 'TypeScript adalah bahasa pemrograman open-source yang dikembangkan dan dikelola oleh Microsoft. Ini adalah superset sintaksis ketat dari JavaScript dan menambahkan pengetikan statis opsional ke bahasa tersebut. TypeScript dirancang untuk pengembangan aplikasi besar dan transkompilasi ke JavaScript.'
    }
};
// ./Data article

// Mencetak html dengan data di article
function factory(key) {     
    console.log(article[key]);
    if (article[key] != undefined) {
        var konten = 
            '<article class="card">'
                + '<a class="title" href="' + article[key].url + '"><h3>' + article[key].title + '</h3></a>'
                + '<small><a class="url" href="' + article[key].url + '">' + article[key].url + '</a></small>'
                + '<div class="wrap">'
                    + '<a class="description" href="' + article[key].url + '">'
                        + article[key].description
                    + '</a>'
                + '</div>'
            + '</article>';
        return konten;
    }
    return '';
}
// ./Mencetak html dengan data di article

// Function onclick
function cari($this) {
    var value = $this.previousElementSibling.value;                
    var key = value.trim().split(/\s+/);
    let content = document.querySelector('#content');
    var s = '';
    key.forEach(function(val) {        
        s += factory(val.toLowerCase());
    });    
    console.log(s);
    content.innerHTML = s;    
}
// ./Function onclick

// code agar user bisa mengklik button cari dengan tombol 'ENTER'
var input = document.getElementById('input-search');
input.addEventListener('keyup', function(event){
    if (event.keyCode === 13) {
        document.getElementById('btn-search').click();
    }
});