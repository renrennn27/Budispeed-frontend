<script setup>
import { reactive, ref } from 'vue'

const currentView = ref('management')

const products = reactive([
  { id: 'P-001', name: 'Ultra Tires', price: 'Rp 14.000', selected: false },
  { id: 'P-002', name: 'Lap Micro fiber', price: 'Rp 14.000', selected: false },
  { id: 'P-003', name: 'Sponge', price: 'Rp 14.000', selected: false },
  { id: 'P-004', name: 'Bantal Udara', price: 'Rp 14.000', selected: false },
  { id: 'P-005', name: 'Wiper hybrid', price: 'Rp 14.000', selected: false },
])

const form = reactive({ id: null, name: '', price: '', desc: '' })
const preview = ref(null)
const fileInputRef = ref(null)

function goTo(view) {
  currentView.value = view
}

function openForm() {
  form.id = null
  form.name = ''
  form.price = ''
  form.desc = ''
  preview.value = null
  if (fileInputRef.value) fileInputRef.value.value = ''
  currentView.value = 'product'
}

function cancelForm() {
  currentView.value = 'management'
}

function onFileChange(e) {
  const file = e.target.files[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = ev => (preview.value = ev.target.result)
  reader.readAsDataURL(file)
}

function saveProduct() {
  if (!form.name.trim()) return alert('Nama produk belum diisi!')
  if (!form.price.trim()) return alert('Harga belum diisi!')

  const formattedPrice = form.price.startsWith('Rp') ? form.price : `Rp ${form.price}`

  if (form.id) {
    const p = products.find(x => x.id === form.id)
    if (p) {
      p.name = form.name
      p.price = formattedPrice
    }
  } else {
    const maxId = products.reduce((max, p) => {
      const num = parseInt(p.id.split('-')[1])
      return num > max ? num : max
    }, 0)

    products.push({
      id: `P-${String(maxId + 1).padStart(3, '0')}`,
      name: form.name,
      price: formattedPrice,
      selected: false,
    })
  }
  currentView.value = 'management'
}

function onEdit(p) {
  form.id = p.id
  form.name = p.name
  form.price = p.price
  form.desc = ''
  preview.value = null
  if (fileInputRef.value) fileInputRef.value.value = ''
  currentView.value = 'product'
}

function onDelete(p) {
  if (confirm(`Yakin ingin menghapus "${p.name}"?`)) {
    const idx = products.findIndex(x => x.id === p.id)
    if (idx !== -1) products.splice(idx, 1)
  }
}

function bulkDelete() {
  const selectedCount = products.filter(p => p.selected).length
  if (selectedCount === 0) return alert('Pilih produk yang ingin dihapus!')

  if (confirm(`Yakin ingin menghapus ${selectedCount} produk?`)) {
    for (let i = products.length - 1; i >= 0; i--) {
      if (products[i].selected) products.splice(i, 1)
    }
  }
}

function editSelected() {
  const selected = products.find(p => p.selected)
  if (selected) onEdit(selected)
  else alert('Pilih produk dulu untuk diedit!')
}
</script>

<template>
  <div class="app">
    <aside class="sidebar">
      <div class="brand">
        <h3>Dashboard</h3>
        <h4>Budispeed</h4>
      </div>

      <nav class="menu">
        <ul>
          <li :class="{ active: currentView === 'management' }" @click="goTo('management')">
            <span class="icon">📁</span>
            Manajemen
          </li>
          <li :class="{ active: currentView === 'product' }" @click="goTo('product')">
            <span class="icon">🛒</span>
            Produk
          </li>
        </ul>
      </nav>

      <button class="logout">← Keluar</button>
    </aside>

    <main class="main">
      <section v-if="currentView === 'management'" class="card">
        <h2 class="title">Manajemen Produk</h2>

        <div class="actions">
          <button class="btn btn-add" @click="openForm">Tambah Produk</button>
          <button class="btn btn-delete" @click="bulkDelete">Hapus Produk</button>
          <button class="btn btn-edit" @click="editSelected">Edit Produk</button>
        </div>

        <div class="table-wrap">
          <div class="table-head">
            <div class="th id">Pilih</div>
            <div class="th name">Nama Produk</div>
            <div class="th price">Harga</div>
            <div class="th aksi">Aksi</div>
          </div>

          <div class="table-body">
            <div v-for="p in products" :key="p.id" class="tr">
              <div class="td id">
                <input type="checkbox" v-model="p.selected" />
              </div>
              <div class="td name">{{ p.name }}</div>
              <div class="td price">{{ p.price }}</div>
              <div class="td aksi">
                <button class="icon-btn" @click="onEdit(p)">✏</button>
                <button class="delete-btn" @click="onDelete(p)">🗑</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section v-if="currentView === 'product'" class="card form-card">
        <h2 class="title">Form Produk</h2>

        <div class="form-grid">
          <div>
            <label>
              Nama Produk
              <input v-model="form.name" placeholder="Masukkan nama produk" />
            </label>

            <label>
              Harga
              <input v-model="form.price" placeholder="Masukkan harga" />
            </label>

            <label class="desc">
              Deskripsi
              <textarea v-model="form.desc" rows="6" placeholder="Deskripsi produk..." />
            </label>

            <div class="form-actions">
              <button class="btn primary" @click="saveProduct">Simpan</button>
              <button class="btn ghost" @click="cancelForm">Batal</button>
            </div>
          </div>

          <div class="uploader">
            <label class="upload-box">
              <div class="camera">📷</div>
              <div>Klik untuk unggah gambar</div>
              <input type="file" ref="fileInputRef" @change="onFileChange" accept="image/*" />
            </label>

            <div v-if="preview" class="preview">
              <img :src="preview" alt="preview" />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  background: #1f1f1f;
  font-family: "Segoe UI", Roboto, Arial, sans-serif;
}

.app {
  display: flex;
  min-height: 100vh;
  background: #1f1f1f;
  color: #fff;
}

.sidebar {
  width: 220px;
  background: #a21414;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.brand {
  text-align: center;
}

.brand h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 4px;
}

.brand h4 {
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: 1px;
}

.menu ul {
  list-style: none;
}

.menu li {
  padding: 10px 12px;
  border-radius: 8px;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.3s;
}

.menu li.active {
  background: rgba(0, 0, 0, 0.2);
  font-weight: 700;
}

.menu li:hover {
  background: rgba(0, 0, 0, 0.1);
}

.logout {
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  color: #fff;
  padding: 10px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.logout:hover {
  background: rgba(255, 255, 255, 0.1);
}

.main {
  flex: 1;
  padding: 36px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.card {
  background: #fff;
  color: #111;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  width: 90%;
  max-width: 950px;
}

.title {
  margin-bottom: 16px;
  font-size: 1.4rem;
  font-weight: 700;
}

.actions {
  display: flex;
  gap: 12px;
  margin-bottom: 18px;
}

.btn {
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
}

.btn-add {
  background: #e7e7e7;
}

.btn-delete {
  background: #ff2e2e;
  color: #fff;
}

.btn-edit {
  background: #02a8e0;
  color: #fff;
}

.btn:hover {
  opacity: 0.9;
}

.table-wrap {
  background: #f7f7f7;
  border-radius: 8px;
  padding: 12px;
}

.table-head {
  display: flex;
  font-weight: 700;
  padding: 10px;
  background: #e0e0e0;
  border-radius: 6px;
}

.th {
  flex: 1;
  text-align: left;
}

.table-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
}

.tr {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #c91515;
  color: #fff;
  padding: 10px 14px;
  border-radius: 6px;
}

.td {
  flex: 1;
}

.td.aksi {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.icon-btn,
.delete-btn {
  border: none;
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;
}

.icon-btn {
  background: rgba(255, 255, 255, 0.2);
}

.delete-btn {
  background: #e33;
  color: #fff;
}

.icon-btn:hover,
.delete-btn:hover {
  transform: scale(1.05);
}

.form-card {
  max-width: 960px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 20px;
}

label {
  display: block;
  margin-bottom: 12px;
  font-weight: 600;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  margin-top: 4px;
  font-size: 0.95rem;
}

.form-actions {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.btn.primary {
  background: #c91515;
  color: #fff;
}

.btn.ghost {
  background: transparent;
  border: 1px solid #ccc;
}

.uploader {
  text-align: center;
}

.upload-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed #c91515;
  padding: 28px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  position: relative;
}

.upload-box:hover {
  background: rgba(201, 21, 21, 0.05);
}

.upload-box input[type="file"] {
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
}

.preview img {
  margin-top: 12px;
  max-width: 100%;
  border-radius: 8px;
}

@media (max-width: 900px) {
  .app {
    flex-direction: column;
  }
  .sidebar {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  }
  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style>

