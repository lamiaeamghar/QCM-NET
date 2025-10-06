<template>
	<div class="dashboard-wrapper bg-white-800 ml-0 lg:ml-[320px]">
		<div class="my-courses pt-11 pb-section">
			<div class="container">
				<h1 class="text-[28px] mb-7.5">Purchase History</h1>
				<div class="dashboard-purchase-history">
					<div class="rounded overflow-x-auto">
						<table class="table-auto w-full">
							<thead class="hidden md:contents">
								<tr class="border-gallery border">
									<th class="bg-[#f4f9ff] text-sm font-semibold text-heading px-2.5 py-3 whitespace-nowrap text-left first:pl-7.5 last:pr-7.5">ID</th>
									<th class="bg-[#f4f9ff] text-sm font-semibold text-heading px-2.5 py-3 whitespace-nowrap text-left first:pl-7.5 last:pr-7.5">Courses</th>
									<th class="bg-[#f4f9ff] text-sm font-semibold text-heading px-2.5 py-3 whitespace-nowrap text-left first:pl-7.5 last:pr-7.5">Amount</th>
									<th class="bg-[#f4f9ff] text-sm font-semibold text-heading px-2.5 py-3 whitespace-nowrap text-left first:pl-7.5 last:pr-7.5">Status</th>
									<th class="bg-[#f4f9ff] text-sm font-semibold text-heading px-2.5 py-3 whitespace-nowrap text-left first:pl-7.5 last:pr-7.5">Date</th>
								</tr>
							</thead>
							<tbody>
								<tr class="border md:border-b border-gallery mb-5 md:mb-0 last:mb-0 p-5 bg-white block md:table-row">
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">ID</label>
										<p>#10887</p>
									</td>
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Courses</label>
										<p>Learn Algebra The Easy Way!</p>
									</td>
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Amount</label>
										<p class="font-bold">$45.<small>00</small></p>
									</td>
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Status</label>
										<p>Processing</p>
									</td>
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Date</label>
										<p>February 1, 2022</p>
									</td>
								</tr>
								<tr class="border md:border-b border-gallery mb-5 md:mb-0 last:mb-0 p-5 bg-white block md:table-row">
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">ID</label>
										<p>#10852</p>
									</td>
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Courses</label>
										<p>Investment Management Specialization</p>
									</td>
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Amount</label>
										<p class="font-bold">$43.<small>99</small></p>
									</td>
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Status</label>
										<p class="bg-[#db5382] text-white rounded-[3px] inline-block px-1.5 py-1">On Hold</p>
									</td>
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Date</label>
										<p>January 31, 2022</p>
									</td>
								</tr>
								<tr class="border md:border-b border-gallery mb-5 md:mb-0 last:mb-0  p-5 bg-white block md:table-row">
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">ID</label>
										<p>#10839</p>
									</td>
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Courses</label>
										<p>Photography Masterclass: A Complete Guide to Photography</p>
									</td>
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Amount</label>
										<p class="font-bold">$49.<small>00</small></p>
									</td>
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Status</label>
										<p>Processing</p>
									</td>
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Date</label>
										<p>January 30, 2022</p>
									</td>
								</tr>
								<tr class="border md:border-b border-gallery mb-5 md:mb-0 last:mb-0 p-5 bg-white block md:table-row">
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">ID</label>
										<p>#10676</p>
									</td>
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Courses</label>
										<p>Investment Management Specialization</p>
									</td>
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Amount</label>
										<p class="font-bold">$34.<small>00</small></p>
									</td>
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Status</label>
										<p>Processing</p>
									</td>
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Date</label>
										<p>January 12, 2022</p>
									</td>
								</tr>
								<tr class="border md:border-b border-gallery mb-5 md:mb-0 last:mb-0 p-5 bg-white block md:table-row">
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">ID</label>
										<p>#10568</p>
									</td>
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Courses</label>
										<p>Investment Management Specialization</p>
									</td>
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Amount</label>
										<p class="font-bold">$34.<small>00</small></p>
									</td>
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Status</label>
										<p>Processing</p>
									</td>
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Date</label>
										<p>January 2, 2022</p>
									</td>
								</tr>
								<tr class="border md:border-b border-gallery mb-5 md:mb-0 last:mb-0 p-5 bg-white block md:table-row">
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">ID</label>
										<p>#9461</p>
									</td>
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Courses</label>
										<p>Investment Management Specialization</p>
									</td>
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Amount</label>
										<p class="font-bold">$83.<small>00</small></p>
									</td>
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Status</label>
										<p class="bg-[#db5382] text-white rounded-[3px] inline-block px-1.5 py-1">On Hold</p>
									</td>
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Date</label>
										<p>October 31, 2021</p>
									</td>
								</tr>
								<tr class="border md:border-b border-gallery mb-5 md:mb-0 last:mb-0 p-5 bg-white block md:table-row">
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">ID</label>
										<p>#3564</p>
									</td>
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Courses</label>
										<p>Illustrator 2020 MasterClass</p>
									</td>
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Amount</label>
										<span class="font-bold">$22.<small>00</small></span>
									</td>
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Status</label>
										<p class="bg-[#fd6a03] text-white rounded-[3px] inline-block px-1.5 py-1">Cancelled</p>
									</td>
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Date</label>
										<p>December 15, 2020</p>
									</td>
								</tr>
								<tr class="border md:border-b border-gallery mb-5 md:mb-0 last:mb-0 p-5 bg-white block md:table-row">
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Id</label>
										<p>#3374</p>
									</td>
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Courses</label>
										<p>Successful Negotiation: Master Your Negotiating Skills</p>
									</td>
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Amount</label>
										<p class="font-bold">$133.<small>00</small></p>
									</td>
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Status</label>
										<p class="bg-[#4bd863] text-white rounded-[3px] inline-block px-1.5 py-1">Completed</p>
									</td>
									<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
										<label class="font-semibold text-base md:hidden pr-4">Date</label>
										<p>December 14, 2020</p>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
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