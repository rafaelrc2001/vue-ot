
<script lang="ts">
export default {
    login(username: string, password: string) {
        // Simulación de login, reemplaza por llamada a API real
        if (username === 'admin' && password === 'admin') {
            localStorage.setItem('token', 'demo-token');
            return true;
        }
        return false;
    },
    logout() {
        localStorage.removeItem('token');
    },
    isAuthenticated() {
        return !!localStorage.getItem('token');
    }
}
</script>