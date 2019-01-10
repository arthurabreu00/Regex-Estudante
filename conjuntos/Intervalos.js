const texto = '1,2,4,3,5,6,a.b!c?e[f';
const texto2 = "0,1,2,3,4,5,6,7,9,0,A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"

console.log(texto.match(/[a-z]/g));
console.log(texto.match(/[b-d]/g));
console.log(texto.match(/[2-4]/g));
console.log(texto.match(/[A-Z1-3]/gi));