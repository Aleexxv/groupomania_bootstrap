<template>
	<div>
		<Header />
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h1>Hello {{ user.firstName }} {{ user.lastName }} !</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: this.$auth.user,
		}
	},
}
</script>