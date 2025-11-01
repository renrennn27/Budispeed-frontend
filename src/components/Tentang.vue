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

        <!-- Section Kenapa Memilih Budispeed -->
        <div class="Kenapa-Memilih-bduispeed-section">
            <div class="Kenapa-Memilih-bduispeed-container">
                <h2 class="title">
                    <span class="title-black">Kenapa Memilih </span>
                    <span class="title-red">Budispeed?</span>
                </h2>
                <p class="subtitle">
                Kami memiliki keunggulan yang terpercaya untuk para pelanggan
                </p>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="icon-wrapper">
                        <img src="../assets/logokmb3.png" alt="Pengalaman Terpercaya">
                    </div>
                    <h3 class="feature-title">Pengalaman Terpercaya</h3>
                    <p class="feature-description">Berdiri lebih dari dua dekade sejak 1998, kami memiliki pengalaman untuk memberikan produk dan layanan terbaik.</p>
                </div>
            <div class="feature-card">
                <div class="icon-wrapper">
                    <img src="../assets/logokmb2.png" alt="Kualitas Terjamin">
                </div>
                <h3 class="feature-title">Kualitas Terjamin</h3>
                <p class="feature-description">Kami menyediakan beragam aksesoris dan produk perawatan mobil pilihan untuk meningkatkan kenyamanan dan tampilan kendaraan Anda.</p>
            </div>
            <div class="feature-card">
                <div class="icon-wrapper">
                    <img src="../assets/logokmb1.png" alt="Viral & Otentik">
                </div>
                <h3 class="feature-title">Viral & Otentik</h3>
                <p class="feature-description">Disukai ribuan audiens, gaya kami yang jujur dan apa adanya adalah jaminan pelayanan yang transparan dan anti baper.</p>
            </div>
        </div>
    </div>
</div>

</template>

<style>
    .main-container {
            background-color: var(--primary-color);
            padding: 60px 0;
            border-radius: 60px;
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
            font-weight: bold;
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

        /* Section Kenapa Memilih Budispeed */
        .Kenapa-Memilih-bduispeed-section {
            background-color: #ffffff;
            padding: 64px 40px;
        }

        .Kenapa-Memilih-bduispeed-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .title {
            font-size: 2.5rem;
            font-weight: 800;
            text-align: center;
            margin-bottom: 16px;
            line-height: 1.2;
        }

        .title-black {
            color: #000000;
            font-weight: 800;
        }

        .title-red {
            color: #dc2626;
            font-weight: 800;
        }

        .subtitle {
            text-align: center;
            color: #374151;
            font-size: 1.390rem;
            margin-bottom: 48px;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
        }

        .feature-card {
            border: 2px solid #000000;
            padding: 32px;
            transition: box-shadow 0.3s ease;
            background-color: #ffffff;
        }

        .feature-card:hover {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        .icon-wrapper {
            margin-bottom: 24px;
        }

        .icon-wrapper img {
            width: 48px;
            height: 48px;
            object-fit: contain;
        }

        .feature-title {
            font-size: 1.25rem;
            font-weight: bold;
            color: #000000;
            margin-bottom: 16px;
        }

        .feature-description {
            color: #374151;
            line-height: 1.8;
            text-align: justify;
            font-size: 0.95rem;
            letter-spacing: 0.3px;
        }

        @media (max-width: 768px) {
            .features-grid {
                grid-template-columns: 1fr;
        }
    
        .title {
            font-size: 2rem;
        }
    }

</style>