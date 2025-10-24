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
            max-width: 100%;
            margin: 0;
        }

        .header {
            margin-bottom: 40px;
            padding: 0 40px;
        }

        .header h1 {
            font-size: 26px;
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
            margin-bottom: 15px;
            letter-spacing: 1px;
            align-self: flex-end;
            font-style: italic;

        }

        .text-container h2 span {
            color: #c41e1e;
            font-weight: bold;
        }

        .text-container p {
            font-size: 16px;
            line-height: 1.8;
            color: #333;
            text-align: right;
        }

</style>