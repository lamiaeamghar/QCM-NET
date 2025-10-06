<template>
	<div class="dashboard-wrapper bg-white-800 ml-0 lg:ml-[320px]">
		<div class="my-courses pt-11 pb-section">
			<div class="container">
				<div class="bg-white rounded p-7.5 border border-gallery space-y-3 sm:space-y-1.5">
					<h5 class="mb-3">Current Balance</h5>
					<div class="text-light">
						<p>You currently have <strong class="text-heading">$8.01</strong> and this is insufficient balance to withdraw.</p>
					</div>
					<div class="flex items-center text-light">
						<div class="text-primary pr-1">
							<i class="far fa-question-circle"></i>
						</div>
						<p>The preferred payment method is selected as Bank Transfer. You can change your
							<n-link
								to=""
								class="text-primary"
							>withdrawal preference</n-link>
						</p>
					</div>
				</div>

				<div class="mt-4 rounded overflow-x-auto">
					<table class="table-auto w-full">
						<thead class="hidden md:contents">
							<tr class="border-gallery border">
								<th class="bg-[#f4f9ff] text-sm font-semibold text-heading px-2.5 py-3 whitespace-nowrap text-left first:pl-7.5 last:pr-7.5">Withdrawal Method</th>
								<th class="bg-[#f4f9ff] text-sm font-semibold text-heading px-2.5 py-3 whitespace-nowrap text-left first:pl-7.5 last:pr-7.5">Requested On</th>
								<th class="bg-[#f4f9ff] text-sm font-semibold text-heading px-2.5 py-3 whitespace-nowrap text-left first:pl-7.5 last:pr-7.5">Amount</th>
								<th class="bg-[#f4f9ff] text-sm font-semibold text-heading px-2.5 py-3 whitespace-nowrap text-left first:pl-7.5 last:pr-7.5">Status</th>
							</tr>
						</thead>
						<tbody>
							<tr class="border md:border-b border-gallery mb-5 md:mb-0 last:mb-0 p-5 bg-white block md:table-row">
								<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
									<label class="font-semibold text-base md:hidden pr-4">Requested On</label>
									<div class="flex items-center">
										<img
											src="/images/svg/icon-paypal.svg"
											alt="Paypal"
										>
										<p class="pl-2">
											<strong>PayPal</strong>
											in****r@edumall.com
										</p>
									</div>
								</td>
								<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
									<label class="font-semibold text-base md:hidden pr-4">Requested On</label>
									<p>February 1, 2022 2:40 am</p>
								</td>
								<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
									<label class="font-semibold text-base md:hidden pr-4">Amount</label>
									<p class="font-bold">$45.<small>00</small></p>
								</td>
								<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
									<label class="font-semibold text-base md:hidden pr-4">Status</label>
									<p class="text-[12px] font-semibold rounded-[3px] inline-block px-2.5 py-2.5 leading-none min-w-[100px] text-center bg-[#f7fbf8] text-[#6cbd7e] border border-[#c3e5ca]">Approved</p>
								</td>
							</tr>
							<tr class="border md:border-b border-gallery mb-5 md:mb-0 last:mb-0 p-5 bg-white block md:table-row">
								<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
									<label class="font-semibold text-base md:hidden pr-4">Requested On</label>
									<div class="flex items-center">
										<img
											src="/images/svg/icon-paypal.svg"
											alt="Paypal"
										>
										<p class="pl-2">
											<strong>PayPal</strong>
											in****r@edumall.com
										</p>
									</div>
								</td>
								<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
									<label class="font-semibold text-base md:hidden pr-4">Requested On</label>
									<p>January 31, 2022 3:20 am</p>
								</td>
								<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
									<label class="font-semibold text-base md:hidden pr-4">Amount</label>
									<p class="font-bold">$43.<small>99</small></p>
								</td>
								<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
									<label class="font-semibold text-base md:hidden pr-4">Status</label>
									<p class="text-[12px] font-semibold rounded-[3px] inline-block px-2.5 py-2.5 leading-none min-w-[100px] text-center bg-[#fffcf4] text-[#ffc221] border border-[#ffe7a6]">Pending</p>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	layout: "InstructorDashboard",

	head() {
		return {
			title: "Dashboard",
			bodyAttrs: {
				class: "bg-white-800",
			},
		};
	},
};
</script>