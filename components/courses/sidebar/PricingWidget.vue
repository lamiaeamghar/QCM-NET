<template>
	<div class="mt-7 pt-5 border-t ">
		<h6 class="mb-5 text-xs uppercase">Pricing</h6>
		<ul class="space-y-5">
			<li class="font-semibold text-light capitalize">
				<div class="form-check">
					<label class="form-check-label inline-block text-light cursor-pointer hover:text-primary">
						<input
							id="all"
							class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
							type="radio"
							name="price"
							value="all"
							checked
						>
						all
					</label>
				</div>
			</li>
			<li class="font-semibold text-light capitalize">
				<div class="form-check">
					<label class="form-check-label inline-block text-light cursor-pointer hover:text-primary">
						<input
							id="free"
							class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
							type="radio"
							name="price"
							value="free"
						>
						free
					</label>
				</div>
			</li>
			<li class="font-semibold text-light capitalize">
				<div class="form-check">
					<label class="form-check-label inline-block text-light cursor-pointer hover:text-primary">
						<input
							id="paid"
							class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
							type="radio"
							name="price"
							value="paid"
						>
						Paid
					</label>
				</div>
			</li>
		</ul>
	</div>
</template>
