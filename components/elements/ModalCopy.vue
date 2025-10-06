<template>
	<transition name="modal-fade">
		<div class="modal-backdrop fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black/40 z-20">
			<div
				class="modal w-[600px] bg-white overflow-x-auto flex flex-col shadow-[2px_2px_20px_1px_rgba(0,0,0,0.20)] mx-4"
				role="dialog"
				aria-labelledby="modalTitle"
				aria-describedby="modalDescription"
			>
				<header
					id="modalTitle"
					class="modal-header flex relative text-heading justify-between border-b border-gallery px-5 py-3"
				>
					<slot name="header">
						<h2 class="text-xl">This is the default tile!</h2>
					</slot>
					<button
						type="button"
						class="text-2xl font-bold text-primary w-7.5 h-7.5 leading-none"
						aria-label="Close modal"
						@click="$emit('close')"
					>
						<i class="fas fa-times"></i>
					</button>
				</header>

				<section
					id="modalDescription"
					class="modal-body relative px-5 py-3"
				>
					<slot name="body">
						<p>This is the default body!</p>
					</slot>
				</section>

				<footer class="modal-footer px-5">
					<div class="border-t border-gallery py-3 space-x-2">
						<slot name="footer">
							<button
								type="button"
								class="text-heading bg-white-500 rounded font-semibold px-7 py-2.5 hover:bg-secondary hover:text-heading"
								aria-label="Close modal"
								@click="$emit('close')"
							>
								Cancel
							</button>
						</slot>

					</div>
				</footer>
			</div>
		</div>
	</transition>
</template>

<script>
export default {};
</script>

<style>
.modal-fade-enter,
.modal-fade-leave-to {
	opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
	transition: opacity 0.5s ease;
}
</style>