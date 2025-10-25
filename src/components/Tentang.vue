<template>

<div class="main-container">
    <div class="container">
        <!-- Section Tentang Kami -->
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

        <!-- Section Siapa Kami Saat Ini -->
        <div class="section-siapa-kami">
            <div class="siapa-kami-container">
                <div class="content-wrapper-second">
                    <div class="text-container-second">
                        <h2><span>Siapa Kami</span> Saat Ini</h2>
                        <p>Kini, Budispeed adalah pusat aksesori dan komponen mobil di Surabaya yang menyediakan beragam kebutuhan kendaraan. Kami dikenal luas melalui TikTok (@budispeed.id) berkat gaya promosi kami yang jujur, ceplas-ceplos, dan menghibur.</p>
                        <p class="question">Penasaran? kunjugi sosial media kami!</p>
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
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #c41e1e;
            padding: 60px 0;
        }

        .container {
            max-width: 1200px;
            margin: 0;
        }

        /* Section Tentang Kami */
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

        /* Section Siapa Kami Saat Ini */
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
            transition: all 0.3s ease;
            text-transform: none;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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

</style>