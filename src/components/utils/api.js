// Data dummy (diimpor atau disediakan di awal)
import { data } from "./ruang_diskusi_dummy";
let ruangDiskusi = data; // Gantikan ini dengan data dummy Anda setelah di-load

// Fungsi untuk melakukan operasi CRUD

// Create: Menambahkan ruang diskusi baru
function createRuangDiskusi(data) {
    const newId = ruangDiskusi.length > 0 ? ruangDiskusi[ruangDiskusi.length - 1].id + 1 : 1;
    const newRuangDiskusi = { id: newId, ...data };
    ruangDiskusi.push(newRuangDiskusi);
    return newRuangDiskusi;
}

// Read: Mendapatkan semua data atau data berdasarkan ID
function readRuangDiskusi(id = null) {
    if (id === null) {
        return ruangDiskusi; // Mengembalikan semua data
    }
    return ruangDiskusi.find((item) => item.id === id); // Mengembalikan data berdasarkan ID
}

// Read by Name: Mencari data berdasarkan nama ruang diskusi
function findRuangDiskusiByName(name) {
    return ruangDiskusi.filter((item) => item.nama.toLowerCase().includes(name.toLowerCase()));
}

// Update: Memperbarui data berdasarkan ID
function updateRuangDiskusi(id, newData) {
    const index = ruangDiskusi.findIndex((item) => item.id === id);
    if (index === -1) {
        return `Ruang diskusi dengan ID ${id} tidak ditemukan.`;
    }
    ruangDiskusi[index] = { ...ruangDiskusi[index], ...newData };
    return ruangDiskusi[index];
}

// Delete: Menghapus data berdasarkan ID
function deleteRuangDiskusi(id) {
    const index = ruangDiskusi.findIndex((item) => item.id === id);
    if (index === -1) {
        return `Ruang diskusi dengan ID ${id} tidak ditemukan.`;
    }
    const deletedItem = ruangDiskusi.splice(index, 1);
    return deletedItem[0];
}

// Detail: Mendapatkan detail ruang diskusi berdasarkan ID
function detailRuangDiskusi(id) {
    const ruang = readRuangDiskusi(id);
    if (!ruang) {
        return `Ruang diskusi dengan ID ${id} tidak ditemukan.`;
    }
    return ruang;
}

export {
    createRuangDiskusi,
    readRuangDiskusi,
    findRuangDiskusiByName,
    updateRuangDiskusi,
    deleteRuangDiskusi,
    detailRuangDiskusi
}