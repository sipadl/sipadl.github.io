const mode = true;
const redirectToWa = () => {
    // Replace the phone number below with your own WhatsApp number
    const phoneNumber = '081290669170'; 
    const message = '';
    const url = `https://wa.me/6281290669170?text=Hello! I am interested in your services.`;
    
    // Redirect to WhatsApp
    window.location.href = url;
}
const dataDiri = {
    "nama":"Fadel Muhammad",
    "role": "Software Development",
    "profile" : "https://via.placeholder.com/730",
    "intro" : "Im Fadel and I have over three years of programming experience, specializing in Laravel and Java Spring Boot. I've collaborated on various app development projects, managing data solutions and resolving issues using JavaScript, Spring, and PHP. My journey as a developer began in 2019 and has been a rewarding experience of continuous growth and learning.",
    "pendidikan" : [
        {
        "url" : null,
        "nama" : "Bina Sarana Informatika University",
        "gelar": "Diploma",
        "ipk" : "3.76",
        "jurusan" : "System Information",
        "dari" : 2017,
        "sampai": "2020"
        }
    ],
    "pengalaman": [
        {
          "id" : 1,
          "perusahaan": "PT Mitra Transaksi Indonesia",
          "posisi": "Software Development",
          "waktu": {
            "mulai": "Jan 2022",
            "selesai": "Present"
          },
          "tags":[
            {
                'lang': 'Laravel',
                'class': 'badge red'
            },
            {
                'lang': 'React Js',
                'class': 'badge blue'
            },
            {
                'lang': 'Oracle',
                'class': 'badge red'
            },
            {
                'lang': 'Spring Boot',
                'class': 'badge green'
            },
            {
                'lang': 'Firebase',
                'class': 'badge yellow'
            }
        ],
          "tugas": [
            "Leading the development of the innovative PWA QRIS Mandiri (Livin Usaha) using React.js and Spring (On Client)",
            "Contributing to the development of Nyala By OCBC",
            "Creating a cutting-edge Training Website App",
            "Resolving issues and bugs with precision",
            "Introducing new features and meticulously documenting project details"
          ]
        },
        {
          "id" : 2,
          "perusahaan": "PT Rekayasa Aplikasi Digital",
          "posisi": "Full-Stack Development",
          "waktu": {
            "mulai": "Sept 2020",
            "selesai": "Dec 2021"
          },
          "tags":[
            {
                'lang': 'Laravel',
                'class': 'badge red'
            },
            {
                'lang': 'React Js',
                'class': 'badge blue'
            },
            {
                'lang': 'React Native',
                'class': 'badge blue'
            },
            {
                'lang': 'Oracle',
                'class': 'badge red'
            },
        ],
          "tugas": [
            "Leading the projects Sekolahdigi & Bantubeli with a focus on innovation",
            "Crafting Apps & Websites for Bantubeli using Laravel",
            "Architecting Apps & Websites for Sekolahdigi using Laravel",
            "Coordinating seamlessly across diverse teams (Mobile and Front-End)",
            "Integrating advanced Payment Gateway solutions",
            "Implementing a streamlined Shipping Delivery Service on Bantubeli",
            "Providing crucial support in resolving complex bugs"
          ]
        },
        {
          "id" : 3,
          "perusahaan": "PT Chitra Maju Jaya Abadi",
          "posisi": "Full-Stack Development",
          "waktu": {
            "mulai": "Jan 2019",
            "selesai": "Sept 2020"
          },
          "tags":[
            {
                'lang': 'Laravel',
                'class': 'badge red'
            },
            {
                'lang': 'CodeIgniter',
                'class': 'badge red'
            },
        ],
          "tugas": [
            "Designing and developing an engaging website catalog using CodeIgniter",
            "Effectively managing and showcasing a diverse range of products"
          ]
        },
        {
            "id": 4,
            "perusahaan": "LSP Nusantara",
            "posisi": "IT Support",
            "waktu": {
                "mulai": "Jul 2016",
                "selesai": "Jan 2019"
            },
            "tags":[],
            "tugas": [
                "Setting up networks",
                "Handling asset purchases",
                "Recording assets",
                "Performing maintenance on networks and computers"
            ]
        }
      ],
      "porto" : [
        {
            "isi": [
              "/images/11.png",
              "/images/12.png",
              "/images/13.png",
              "/images/14.png"
            ],
            "gambar" : "/images/11.png",
            "judul" : "E-Commerce"
        },
        {
            "isi": [
              "/images/9.png",
              "/images/10.png"
          ],
            "gambar" : "/images/9.png",
            "judul" : "Website CV"
        },
        {
            "isi": [
              "/images/3 (1).png",
              "/images/3 (2).png",
              "/images/3 (3).png",
              "/images/3 (4).png",
              "/images/3 (5).png"
            ],
            "gambar" : "/images/3 (1).png",
            "judul" : "Livin Usaha"
        },
        {
            "isi": [
              "/images/2 (1).jpg",
              "/images/2 (2).jpg",
              "/images/2 (3).jpg",
              "/images/2 (4).jpg",
              "/images/2 (5).jpg"
            ],
            "gambar" : "/images/2 (1).jpg",
            "judul" : "Sekolah Digi"
        },
        {
            "isi": [
              "/images/1 (1).png",
              "/images/1 (2).png",
              "/images/1 (3).png",
              "/images/1 (4).png",
              "/images/1 (5).png",
              "/images/1 (6).png",
              "/images/1 (7).png",
              "/images/1 (8).png"
            ],
            "gambar" : "/images/1 (1).png",
            "judul" : "BantuBeli"
        },
        {
            "isi": [
              "/images/5.png",
              "/images/6.png",
              "/images/7.png"
          ],
            "gambar" : "/images/5.png",
            "judul" : "Nyala Merchant"
        },
        {
            "isi": ["/images/4.png"],
            "gambar" : "/images/4.png",
            "judul" : "E-Library kampus UNJ"
        }
      ]

}

function loopClient() {
    const parent = $('.client');
    const client = [
        { name: 'Integrity', icon: 'fas fa-shield-alt' },
        { name: 'Problem Solving', icon: 'fas fa-lightbulb' },
        { name: 'Accuracy', icon: 'fas fa-bullseye' }
    ];
    client.forEach((item, i ) => {
       parent.append(`
       <div key=${i} class="card col-md-3 align-items-center py-4 mx-3 custom-shadow">
        <div class="box">
        <i class="${item.icon} dark-mode-text"></i>
        </div>
            <div class="card-body text-center">
            <h5 class="card-title"> ${item.name}</h5>
            <p class="card-text">Lorem Ipsum Dolor</p>
        </div>
       </div>`);
    });
}
function cardSkills (min, max) {
    let hasil = [];
    for (let index = min; index <= max; index++) {
        hasil.push(`<div class="card border-0 col-sm-3 mx-2 p-2">
                        <img src="/images/logo/${index}.png" class="img-skils-img" alt="">
                    </div>`)
    }
    hasil.join('\n')
    $('#card-skills').append(hasil)
}

function settTags(data) {
    let hasil = [];
    data.forEach((val => {
        hasil.push(`<div class="${val.class}">${val.lang}</div>`)
    })
    )

    return hasil.join('\n');
}

$(document).ready(() => {
    cardSkills(1,6)
    if(mode === true ){
        $('.client').html("")
        $('.accordionExp').html("");
        $('.parent-edu').html("");
        // Pribadi
        $('#name').html(dataDiri.nama);
        $('#role').html(dataDiri.role);
        $('#main-intro').html("Welcome to My CV");
        $('#intro').html(dataDiri.intro);
        $('#experience').html("Experience")
        $('#service').html("Our Services")
        $('#portofolio').html("Portofolio")
        $('#contact').html("Contact Me")
        loopClient()
        // Skills
        $('#heading-skills').html("Skills")
        // Education
        $('#education').html("Education")
        dataDiri.pendidikan.forEach((item) => {
            $('.parent-edu').append(`
            <div class="card text-left shadow rounded-lg">
                <div class="card-body">
                    <h4 class="card-title m-0 p-0">${item.nama} | ${item.gelar}</h4>
                        <small class="card-text m-0 p-0">${item.jurusan} | ${item.sampai}</small>
                </div>
            </div>`)
            })
            dataDiri.pengalaman.forEach((x, i) => {
            const status = i === 0 ? 'show' : '';
                $('.accordionExp').append(`
                    <div class="card">
                        <a data-toggle="collapse" data-parent="#accordianId-${i}" href="#section1ContentId-${i}" aria-expanded="${status ? 'true' : 'false'}" aria-controls="section1ContentId-${i}">
                            <div class="card-header bg-light text-dark ${status}" role="tab" id="section1HeaderId-${i}">
                                <h5 class="mb-0">
                                    ${x.perusahaan}
                                </h5>
                            </div>
                        </a>
                        <div id="section1ContentId-${i}" class="collapse ${status}" role="tabpanel" aria-labelledby="section1HeaderId-${i}">
                            <div class="card-body">
                                Role : <quote>${x.posisi}</quote> <br>
                                Tags :  ${ x.tags.length ? settTags(x.tags) : '-' }<br>
                                Responsibility :
                                <ol type="a">
                                    ${loopResponsibilty(x.tugas)}
                                </ol>
                            </div>
                        </div>
                    </div>
                `);
            
                $(`#section1HeaderId-${i}`).on('click', function () {
                    $(`#section1ContentId-${i}`).collapse('toggle');
                });
            });            
        function loopResponsibilty(response) {
            const list = [];
            response.forEach((item ) => {
                list.push(`<li>${item}</li>`)
            })

            return list.join('\n');
        }

        $('.isi-porto').html("");
        dataDiri.porto.forEach((item) => {
            $('.isi-porto').append(`
            <div class="card  border-0 col-sm-12 col-md-12 mt-2">
            <div class="p-2">
            <a class="text-body" href="#">
            <img class="fix-images" src="${item.gambar}" alt="">
                <div class="card-body p-2">
                <p class="card-title text-center">${item.judul}</p>
                </div>
                </a>
                </div>
            </div>`)
        })
    }
    getListMenu();
});
$(window).on('hashchange', function() {
    $('#list-menu').html('')
    getListMenu();
})
function getListMenu () {
    const menu = ['About','Skill','Education','Experience','Portofolio','Service','Contact']
    menu.forEach((val, i) => {
        const hash = window.location.hash.replace('#', '');
        $('#list-menu').append(`<a href="#${val.toLowerCase()}" class="list-group-item bg-transparent list-group-item-action border-0 my-0 ${hash === val.toLowerCase() || (!hash && val.toLowerCase() === 'about') ? 'active' : '' }">${val}</a>`)
        });
}
if(window.innerHeight < window.innerWidth){
    $('#headers').addClass("sticky-top");
} else {
    console.log('mobile')
}
// Check if dark mode is enabled in local storage
if (sessionStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
}

// Toggle dark mode on switch change
$('#darkModeSwitch').on('change', function () {
    if ($(this).is(':checked')) {
        $('#status-dark-mode').html('')
        $('#status-dark-mode').html(`<i class="fas fa-moon fa-lg"></i>`);
        enableDarkMode();
    } else {
        $('#status-dark-mode').html('')
        $('#status-dark-mode').html(`<i class="fas fa-sun fa-lg"></i>`);
        disableDarkMode();
    }
});

// Function to enable dark mode
function enableDarkMode() {
    $('body').addClass('dark-mode');
    $('hr').addClass('bg-light');
    $('.card').addClass('dark-mode border-light');
    localStorage.setItem('darkMode', 'enabled');
}

// Function to disable dark mode
function disableDarkMode() {
    $('body').removeClass('dark-mode');
    $('hr').removeClass('bg-light');
    $('.card').removeClass('dark-mode border-light');
    localStorage.setItem('darkMode', null);
}