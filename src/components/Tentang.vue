<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>

<div class="main-container">
    <div class="container">
        <div class="header">
            <h1>TENTANG <span>KAMI</span></h1>
        </div>

        <div class="card">
            <div class="content-wrapper">
                <div class="image-container">
                    <img src="../assets/Mobil.png" alt="Budi Speed Car">
                </div>
                <div class="text-container">
                    <h2>SEJARAH <span>KAMI</span></h2>
                    <p>Perjalanan Budispeed dimulai sejak tahun 1998, dirintis oleh ayah dari pemilik saat ini melalui sebuah bengkel rumahan bernama Budi Jaya. Berkat keahliannya dalam memperbaiki speedometer mobil, lahirlah julukan "Budi Speedo" yang kemudian dikenal luas sebagai Budispeed.</p>
                </div>
            </div>
        </div>

        <div class="section-siapa-kami">
            <div class="siapa-kami-container">
                <div class="content-wrapper-second">
                    <div class="text-container-second">
                        <h2><span>Siapa Kami</span> Saat Ini</h2>
                        <p>Kini, Budispeed adalah pusat aksesori dan komponen mobil di Surabaya yang menyediakan beragam kebutuhan kendaraan. Kami dikenal luas melalui TikTok (@budispeed.id) berkat gaya promosi kami yang jujur, ceplas-ceplos, dan menghibur.</p>
                        <p class="question">Penasaran? kunjungi sosial media kami!</p>
                        <button class="btn-visit">Kunjungi sekarang</button>
                    </div>
                    <div class="image-container-second">
                        <img src="../assets/Logotempat.png" alt="Logo">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<style>
    .main-container {
            padding: 60px 0;
            border-radius: 60px;
        }

        .container {
            max-width: 1200px;
            margin: 0;
        }

        .header {
            margin-bottom: 40px;
            padding: 0 40px;
        }

        .header h1 {
            font-size: 24px;
            font-weight: bold;
            color: #1a1a1a;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-style: italic;
        }

        .header h1 span {
            color: #ffffff;
            font-weight: bold;
            font-style: italic;
        }

        .card {
            background-color: #ffffff;
            border-radius: 0 10px 10px 0;
            padding: 40px 50px 40px 0;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            max-width: 85%;
            margin-bottom: 60px;
        }

        .content-wrapper {
            display: flex;
            align-items: center;
            gap: 40px;
            min-height: 300px;
        }

        .image-container {
            flex: 0 0 35%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-left: -50px;
        }

        .image-container img {
            width: 100%;
            height: auto;
            display: block;
        }

        .text-container {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            text-align: right;
        }

        .text-container h2 {
            font-size: 24px;
            font-weight: bold;
            color: #1a1a1a;
            text-transform: uppercase;
            margin-bottom: 20px;
            letter-spacing: 1px;
            align-self: flex-end;
            font-style: italic;
        }

        .text-container h2 span {
            color: #c41e1e;
            font-weight: bold;
            font-style: italic;
        }

        .text-container p {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #333;
            text-align: right;
        }

        .section-siapa-kami {
            padding: 50px 40px;
        }

        .siapa-kami-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .content-wrapper-second {
            display: flex;
            align-items: flex-start;
            gap: 50px;
        }

        .text-container-second {
            flex: 1;
            color: #ffffff;
            font-size: 24px;
            font-weight: bold;
            font-style: italic;
        }

        .text-container-second h2 {
            font-size: 24px;
            font-weight: bold;
            color: black;
            margin-bottom: 25px;
            margin-top: 80px;
            font-style: italic;
        }

        .text-container-second h2 span {
            font-style: italic;
            font-weight: bold;
            color: #ffffff;
            font-size: 24px;
        }

        .text-container-second p {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #ffffff;
            margin-bottom: 15px;
        }

        .text-container-second .question {
            margin-top: 25px;
            margin-bottom: 20px;
        }

        .btn-visit {
            background-color: transparent;
            color: #ffffff;
            border: 2px solid #ffffff;
            padding: 12px 30px;
            border-radius: 25px;
            font-size: 14px;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s ease;
            text-transform: none;
            font-family: 'Montserrat', sans-serif;
        }

        .btn-visit:hover {
            background-color: #ffffff;
            color: #c41e1e;
        }

        .image-container-second {
            flex: 0 0 35%;
            margin-top: 80px;
        }

        .image-container-second img {
            width: 100%;
            height: auto;
            border-radius: 10px;
        }

/* ===== RESPONSIVE STYLES ===== */

@media (max-width: 768px) {
    .main-container {
        padding: 40px 0;
        border-radius: 40px;
    }

    .header {
        margin-bottom: 30px;
        padding: 0 20px;
    }

    .header h1 {
        font-size: 20px;
        letter-spacing: 1.5px;
    }

    .card {
        padding: 30px 30px 30px 0;
        max-width: 90%;
        margin-bottom: 40px;
    }

    .content-wrapper {
        flex-direction: column;
        gap: 25px;
        min-height: auto;
    }

    .image-container {
        flex: 0 0 auto;
        width: 100%;
        margin-left: 0;
        justify-content: center;
    }

    .image-container img {
        max-width: 80%;
    }

    .text-container {
        align-items: center;
        text-align: center;
        padding: 0 20px;
    }

    .text-container h2 {
        font-size: 20px;
        margin-bottom: 15px;
        align-self: center;
    }

    .text-container p {
        font-size: 1rem;
        line-height: 1.6;
        text-align: center;
    }

    .section-siapa-kami {
        padding: 40px 20px;
    }

    .content-wrapper-second {
        flex-direction: column;
        gap: 30px;
    }

    .text-container-second h2 {
        font-size: 20px;
        margin-top: 0;
        margin-bottom: 20px;
    }

    .text-container-second h2 span {
        font-size: 20px;
    }

    .text-container-second p {
        font-size: 1rem;
        line-height: 1.6;
    }

    .btn-visit {
        padding: 10px 25px;
        font-size: 13px;
    }

    .image-container-second {
        flex: 0 0 auto;
        width: 100%;
        margin-top: 20px;
    }

    .image-container-second img {
        max-width: 70%;
        margin: 0 auto;
        display: block;
    }
}

@media (max-width: 480px) {
    .main-container {
        padding: 30px 0;
        border-radius: 30px;
    }

    .header {
        margin-bottom: 20px;
        padding: 0 16px;
    }

    .header h1 {
        font-size: 18px;
        letter-spacing: 1px;
    }

    .card {
        padding: 20px 20px 20px 0;
        max-width: 95%;
        margin-bottom: 30px;
        border-radius: 0 8px 8px 0;
    }

    .content-wrapper {
        gap: 20px;
    }

    .image-container img {
        max-width: 90%;
    }

    .text-container {
        padding: 0 16px;
    }

    .text-container h2 {
        font-size: 18px;
        margin-bottom: 12px;
        letter-spacing: 0.5px;
    }

    .text-container p {
        font-size: 0.95rem;
        line-height: 1.6;
    }

    .section-siapa-kami {
        padding: 30px 16px;
    }

    .content-wrapper-second {
        gap: 25px;
    }

    .text-container-second h2 {
        font-size: 18px;
        margin-bottom: 16px;
    }

    .text-container-second h2 span {
        font-size: 18px;
    }

    .text-container-second p {
        font-size: 0.95rem;
        line-height: 1.6;
        margin-bottom: 12px;
    }

    .text-container-second .question {
        margin-top: 20px;
        margin-bottom: 16px;
    }

    .btn-visit {
        padding: 10px 20px;
        font-size: 12px;
        border-radius: 20px;
    }

    .image-container-second img {
        max-width: 80%;
    }
}

@media (max-width: 360px) {
    .main-container {
        padding: 20px 0;
        border-radius: 20px;
    }

    .header {
        margin-bottom: 16px;
        padding: 0 12px;
    }

    .header h1 {
        font-size: 16px;
    }

    .card {
        padding: 16px 16px 16px 0;
        max-width: 98%;
        margin-bottom: 24px;
    }

    .text-container {
        padding: 0 12px;
    }

    .text-container h2 {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .text-container p {
        font-size: 0.9rem;
        line-height: 1.5;
    }

    .section-siapa-kami {
        padding: 24px 12px;
    }

    .text-container-second h2 {
        font-size: 16px;
        margin-bottom: 12px;
    }

    .text-container-second h2 span {
        font-size: 16px;
    }

    .text-container-second p {
        font-size: 0.9rem;
        line-height: 1.5;
        margin-bottom: 10px;
    }

    .text-container-second .question {
        margin-top: 16px;
        margin-bottom: 12px;
    }

    .btn-visit {
        padding: 8px 18px;
        font-size: 11px;
    }

    .image-container-second img {
        max-width: 90%;
    }
}
</style>