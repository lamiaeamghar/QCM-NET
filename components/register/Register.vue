<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-blue-50 to-white py-16">
    <div class="w-full max-w-md">
      <div class="bg-white p-8 sm:p-12 rounded-2xl shadow-lg shadow-blue-200/40 text-center transition-transform transform hover:scale-105 duration-300">
        <h2 class="text-2xl font-bold mb-6 text-gray-800">
          Register for A <span class="text-blue-600">Free Account</span>
        </h2>
        <p class="mb-8 text-gray-500">To Access 1200+ Online Courses</p>

        <form class="space-y-5">
          <!-- Username -->
          <div class="relative">
            <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <i class="far fa-user"></i>
            </span>
            <input
              type="text"
              required
              placeholder="Username"
              class="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 text-gray-700 placeholder-gray-400 transition"
            />
          </div>

          <!-- Email -->
          <div class="relative">
            <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <i class="far fa-envelope"></i>
            </span>
            <input
              type="email"
              required
              placeholder="Your Email"
              class="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 text-gray-700 placeholder-gray-400 transition"
            />
          </div>

          <!-- Password -->
          <div class="relative">
            <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <i class="fas fa-key"></i>
            </span>
            <input
              type="password"
              required
              placeholder="Password"
              class="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 text-gray-700 placeholder-gray-400 transition"
            />
          </div>

          <!-- Register Button -->
          <button
            type="submit"
            class="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Register
          </button>
        </form>

        <!-- Already have an account -->
        <p class="mt-4 text-sm text-gray-500">
          Already have an account?
          <a href="/login" class="text-blue-600 hover:underline">Log in here</a>
        </p>
      </div>
    </div>
  </div>
</template>
