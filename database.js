import * as SQLite from 'expo-sqlite';

// Abre (ou cria) o banco local
const db = SQLite.openDatabase('cadastros.db');

export async function initDB() {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      senha TEXT NOT NULL
    );
  `);
  
};

export async function cadastrarUsuario(nome, email, senha) {
  await db.runAsync(
    'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
    [nome, email, senha]
  );
}


export async function loginUsuario(email, senha) {
  const resultado = await db.getAsync(
    'SELECT * FROM usuarios WHERE email = ? AND senha = ?',
    [email, senha]
  );

  return resultado; 
}
