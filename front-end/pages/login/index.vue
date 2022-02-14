<template>
	<div class="vue-tempalte">
		<form>
			<h3>Connectez-vous !</h3>
			<div class="form-group">
				<label>Email</label>
				<input v-model="email" type="text" class="form-control form-control-lg" placeholder="Email" />
			</div>
			<div class="form-group">
				<label>Mot de passe</label>
				<input v-model="password" type="text" class="form-control form-control-lg" placeholder="Password" />
			</div>
				<button class="button" @click='login()'>
					<span>Connectez-vous !</span>
				</button>
		</form>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				email: 'postman3@postman.com',
				password: 'PostmanPassword12@'
			}
		},
		methods: {
			async login() {
				try {
					let res = await this.$auth.loginWith('local', {
						data: {
							email: this.email,
							password: this.password
						}
					})
					this.$router.push('/account')
					console.log(res.data.message)
					return res.data
					}
				catch (err) {
					console.log(err)
				}
			},
		}
	}
</script>

<style scoped>

	.vue-tempalte {
		width: 400px;
		margin: 0 auto;
		margin-top: 100px;
	}

	.vue-tempalte h3 {
		text-align: center;
	}

	.vue-tempalte form {
		padding: 20px;
		border: 1px solid #ccc;
		border-radius: 5px;
		background-color: #f8f8f8;
	}

	.vue-tempalte .form-group {
		margin-bottom: 20px;
	}
	
	.vue-tempalte .form-control {
		border-radius: 0;
	}

	.vue-tempalte .btn {
		background-color: #00a8ff;
		border-color: #00a8ff;
		color: #fff;
	}

	.vue-tempalte .btn:hover {
		background-color: #00a8ff;
		border-color: #00a8ff;
		color: #fff;
	}

	.vue-tempalte .forgot-password {
		text-align: right;
	}

	.vue-tempalte .forgot-password a {
		color: #00a8ff;
	}

	.vue-tempalte .forgot-password a:hover {
		color: #00a8ff;
	}

	.vue-tempalte .forgot-password a:focus {
		color: #00a8ff;
	}

	.vue-tempalte .forgot-password a:active {
		color: #00a8ff;
	}

	.vue-tempalte .forgot-password a:visited {
		color: #00a8ff;
	}

</style>