let menyuData = [
    {
        id: 1,
        nomi: "Samarqand To'y Oshi",
        tur: "milliy",
        narx: 45000,
        tarif: "Zig'ir yog'i, qo'y go'shti, no'xat va mayizli maxsus osh.",
        rasm: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOQ24zs5fKHWIW52L3L7DyV46WC4L2QBu7VJHfXA384g&s=10"
    },
    {
        id: 2,
        nomi: "Qo'zichoq Qovurg'a Kabob",
        tur: "kabob",
        narx: 35000,
        tarif: "Ko'mirda pishirilgan sersuv qo'zichoq qovurg'asi.",
        rasm: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwWnIzBlf30p3fMtNfEsNU0sUE_5B2sBA4Ufl6fI2VrA&s=10"
    },
    {
        id: 3,
        nomi: "Shohona Qozon Kabob",
        tur: "milliy",
        narx: 60000,
        tarif: "Yumshoq qo'y go'shti va qizartirilgan yosh kartoshka.",
        rasm: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThj032xA-uhVxZ2hxUFdkAT2yS14e92EI96paNaSIetw&s=10"
    },
    {
        id: 4,
        nomi: "Samarqand Manti (5 dona)",
        tur: "milliy",
        narx: 32000,
        tarif: "Qo'lda tugilgan yupqa xamir va to'g'ralgan go'sht.",
        rasm: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ7uik9Mpgs5x-VNa6P-NlO9zESCA7YeL9WcIxCYwuVQ&s=10"
    },
    {
        id: 5,
        nomi: "G'ijduvon Lula Kabob",
        tur: "kabob",
        narx: 24000,
        tarif: "Maxsus ziravorlar bilan qiymalangan shashlik.",
        rasm: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHigUtOcyRAOVUd0FLq6vz_AAopomgBE2-aQHHd3FM6A&s=10"
    },
    {
        id: 6,
        nomi: "Tovuq Qanotcha Kabob",
        tur: "kabob",
        narx: 22000,
        tarif: "Achchiq-shirin sousda marinadlangan qanotchalar.",
        rasm: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQajw4KtGtuT7mSTNDBcdnWaLdcK4y8m12alQiZybS85g&s=10"
    },
    {
        id: 7,
        nomi: "Yakkasaroy Maxsus Salati",
        tur: "salat",
        narx: 30000,
        tarif: "Mol tili, bodring, yong'oq va mayonezli shohona salat.",
        rasm: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXcy3wBy3t7RIfC0P1gZuJGqWi-A8-5E2O-8EQSd38Sw&s=10"
    },
    {
        id: 8,
        nomi: "Limon va Yalpizli Choy",
        tur: "ichimlik",
        narx: 12000,
        tarif: "Katta choynakda damlangan xushbo'y ko'k choy.",
        rasm: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4VhZiQtYSAlqMMo1v0ZyaE3EJnufT3m21NoX5UPlEnQ&s=10"
    }
];

let savatcha = [];

function chizish(royxat) {
    let quti = document.getElementById("taomlar-qutisi");
    quti.innerHTML = "";

    for (let i = 0; i < royxat.length; i++) {
        let t = royxat[i];
        quti.innerHTML +=
            '<div class="j57">' +
            '<img src="' + t.rasm + '" class="j58">' +
            '<div class="j59">' +
            '<h3 class="j60">' + t.nomi + '</h3>' +
            '<p class="j61">' + t.tarif + '</p>' +
            '<div class="j62">' +
            '<span class="j63">' + t.narx + ' so\'m</span>' +
            '<button class="j64" onclick="qoshish(' + t.id + ')">+ Savatga</button>' +
            '</div>' +
            '</div>' +
            '</div>';
    }
}

function filtr(kategoriya) {
    if (kategoriya == "all") {
        chizish(menyuData);
    } else {
        let saralangan = [];
        for (let i = 0; i < menyuData.length; i++) {
            if (menyuData[i].tur == kategoriya) {
                saralangan.push(menyuData[i]);
            }
        }
        chizish(saralangan);
    }
}

function qidir() {
    let matn = document.getElementById("qidiruv").value.toLowerCase();
    let natija = [];
    for (let i = 0; i < menyuData.length; i++) {
        if (menyuData[i].nomi.toLowerCase().indexOf(matn) > -1) {
            natija.push(menyuData[i]);
        }
    }
    chizish(natija);
}

function qoshish(id) {
    let bor = false;
    for (let i = 0; i < savatcha.length; i++) {
        if (savatcha[i].id == id) {
            savatcha[i].miqdor += 1;
            bor = true;
        }
    }
    if (!bor) {
        for (let j = 0; j < menyuData.length; j++) {
            if (menyuData[j].id == id) {
                savatcha.push({
                    id: menyuData[j].id,
                    nomi: menyuData[j].nomi,
                    narx: menyuData[j].narx,
                    miqdor: 1
                });
            }
        }
    }
    savatYangila();
}

function setQosh() {
    let bor = false;
    for (let i = 0; i < savatcha.length; i++) {
        if (savatcha[i].id == 99) {
            savatcha[i].miqdor += 1;
            bor = true;
        }
    }
    if (!bor) {
        savatcha.push({
            id: 99,
            nomi: "Oilaviy Katta Set (-20%)",
            narx: 145000,
            miqdor: 1
        });
    }
    savatYangila();
    alert("Oilaviy Katta Set savatchaga qo'shildi!");
}

function miqdorOzgartir(index, son) {
    savatcha[index].miqdor += son;
    if (savatcha[index].miqdor <= 0) {
        savatcha.splice(index, 1);
    }
    savatYangila();
}

function savatYangila() {
    let jamiSoni = 0;
    let jamiPul = 0;
    let ichki = document.getElementById("savat-ichki");
    ichki.innerHTML = "";

    for (let i = 0; i < savatcha.length; i++) {
        jamiSoni += savatcha[i].miqdor;
        jamiPul += savatcha[i].narx * savatcha[i].miqdor;

        ichki.innerHTML +=
            '<div class="j65">' +
            '<div><b>' + savatcha[i].nomi + '</b><br><small>' + savatcha[i].narx + ' so\'m</small></div>' +
            '<div>' +
            '<button class="j66" onclick="miqdorOzgartir(' + i + ', -1)">-</button>' +
            '<span>' + savatcha[i].miqdor + '</span>' +
            '<button class="j66" onclick="miqdorOzgartir(' + i + ', 1)">+</button>' +
            '</div>' +
            '</div>';
    }

    document.getElementById("savat-soni").innerText = jamiSoni;
    document.getElementById("umumiy-pul").innerText = jamiPul;
}

function savatOch() {
    document.getElementById("savat-oyna").style.display = "flex";
}

function savatYop() {
    document.getElementById("savat-oyna").style.display = "none";
}

function zakazBer() {
    var manzil = document.getElementById("yetkazish-manzil").value;
    if (savatcha.length == 0) {
        alert("Savatchangiz bo'sh!");
    } else if (manzil == "") {
        alert("Manzilni kiriting!");
    } else {
        alert("Buyurtmangiz qabul qilindi! Tez orada yetkazib beramiz.");
        savatcha = [];
        document.getElementById("yetkazish-manzil").value = "";
        savatYangila();
        savatYop();
    }
}

function bronQil() {
    let ism = document.getElementById("b-ism").value;
    let tel = document.getElementById("b-tel").value;
    let son = document.getElementById("b-son").value;
    let sana = document.getElementById("b-sana").value;

    if (ism == "" || tel == "" || son == "" || sana == "") {
        alert("Barcha kataklarni to'ldiring!");
    } else {
        alert("Rahmat, " + ism + "! " + sana + " kuni " + son + " kishilik VIP stol band qilindi.");
        document.getElementById("b-ism").value = "";
        document.getElementById("b-tel").value = "";
        document.getElementById("b-son").value = "";
        document.getElementById("b-sana").value = "";
    }
}

chizish(menyuData);

function rejimOzgartir() {
    document.body.classList.toggle("oq-rejim");
    let tugma = document.getElementById("rejim-btn");
    if (document.body.classList.contains("oq-rejim")) {
        tugma.innerText = "🌙";
    } else {
        tugma.innerText = "☀️";
    }
}
function tarixgaOt() {
    document.getElementById("birinchi-blok").style.display = "none";
    document.getElementById("ikkinchi-blok").style.display = "flex";
}

function orqagaQayt() {
    document.getElementById("ikkinchi-blok").style.display = "none";
    document.getElementById("birinchi-blok").style.display = "flex";
}

function bronFormaOch() {
    document.getElementById("bron-bosh").style.display = "none";
    document.getElementById("bron-forma").style.display = "block";
}

function bronFormaYop() {
    document.getElementById("bron-forma").style.display = "none";
    document.getElementById("bron-bosh").style.display = "block";
}

function telegramgaOt() {
    let ism = document.getElementById("t-ism").value;
    let tel = document.getElementById("t-tel").value;
    let sana = document.getElementById("t-sana").value;
    let vaqt = document.getElementById("t-vaqt").value;
    let son = document.getElementById("t-son").value;
    let zal = document.getElementById("t-zal").value;
    let sabab = document.getElementById("t-sabab").value;
    let izoh = document.getElementById("t-izoh").value;

    if (ism == "" || tel == "+998 " || tel == "" || sana == "" || vaqt == "") {
        alert("Iltimos, ism, telefon, sana va vaqtni to'liq kiriting!");
        return;
    }

    let telegramLink = "https://t.me/javoh_web_bot";

    let xabar = "Assalomu alaykum! Stol band qilmoqchiman:\n" +
                "Ism: " + ism + "\n" +
                "Tel: " + tel + "\n" +
                "Sana: " + sana + "\n" +
                "Vaqt: " + vaqt + "\n" +
                "Mehmonlar: " + son + " kishi\n" +
                "Zal: " + zal + "\n" +
                "Sabab: " + sabab + "\n" +
                "Izoh: " + izoh;

    window.open(telegramLink + "?text=" + encodeURIComponent(xabar), "_blank");
}
