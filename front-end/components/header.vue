<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="info">
			<NuxtLink class="link" to='/'>Groupomania</NuxtLink>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav class="ml-auto">
					<b-navbar-nav>
						<b-nav-item href="/blogVideos">Médias animés</b-nav-item>
						<b-nav-item href="/blogTexts">Articles</b-nav-item>
					</b-navbar-nav>
					<b-nav-item-dropdown right>
					<template #button-content>
						<em>Mon compte </em>
					</template>
					<div v-if="$auth.loggedIn">
						<div class="dropdown-item">{{ user.firstName }}</div>
						<b-dropdown-item href="/account">Profile</b-dropdown-item>
						<b-dropdown-item @click='logout()'>Déconnexion</b-dropdown-item>
					</div>
					<div v-else>
						<NuxtLink class="link" to='/login'>Connectez-vous !!</NuxtLink>
						<NuxtLink class="link" to='/register'>Inscrivez-vous !!</NuxtLink>
					</div>
					</b-nav-item-dropdown>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
export default {
name: 'Header',
	data() {
		return {
			user: this.$auth.user,
		}
	},
	methods: {
		logout() {
			this.$auth.logout('/logout')
			.then((res) => {
				this.$router.push('/login')
				console.log(res);
			}).catch((err) => {
				console.log(err)
			});
		}
	}
}
</script>

<style scoped>

	.link {
		color: #fff;
		text-decoration: none;
	}

	.dropdown-item:hover {
		background: transparent;
		pointer-events: none;
	}
</style>