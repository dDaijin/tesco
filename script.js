
        // Global state
        let currentUser = null;
        let authMode = 'login';
        let photos = [null, null, null, null];
        let isLoading = false;

        // Photo labels
        const photoLabels = [
            { title: 'Front of ID', subtitle: 'UK Passport, Driving License, or National ID', icon: '🆔' },
            { title: 'Back of ID', subtitle: 'Back side of the same document', icon: '🔄' },
            { title: 'Selfie with ID', subtitle: 'Photo of yourself holding your ID', icon: '🤳' },
            { title: 'Proof of Address', subtitle: 'Utility Bill, Bank Statement, etc.', icon: '🏠' }
        ];

        // Testimonials data
        const testimonials = [
            {
                text: "Incredibly straightforward process! Uploaded my documents in the morning, got my £20 Amazon card by evening. Highly recommend!",
                name: "Sarah Miller",
                location: "London, UK",
                initials: "SM"
            },
            {
                text: "Was skeptical at first, but it's completely legit. Used my Tesco card for the weekly shop. Will definitely tell my friends about this!",
                name: "James Patterson",
                location: "Manchester, UK",
                initials: "JP"
            },
            {
                text: "Quick verification and genuine rewards. The whole process took less than 4 hours from start to finish. Amazing service!",
                name: "Emma Brown",
                location: "Birmingham, UK",
                initials: "EB"
            },
            {
                text: "Perfect for doing the weekly shopping at Tesco. The verification was secure and the gift card arrived exactly as promised.",
                name: "Michael Johnson",
                location: "Leeds, UK",
                initials: "MJ"
            }
        ];

        // FAQ data
        const faqs = [
            {
                question: "How long does verification take?",
                answer: "Most verifications are processed within 3-6 hours. During peak times, it may take up to 24 hours. You'll receive an email notification once your verification is complete and your gift card is ready."
            },
            {
                question: "What documents do I need to upload?",
                answer: "You need: Front and back photos of UK government-issued photo ID, a selfie holding your ID next to your face, and your UK National Insurance Number. All photos must be clear and well-lit."
            },
            {
                question: "Is this completely free?",
                answer: "Yes, absolutely free! No hidden fees, no subscription required, no catch. Just verify your UK residency and identity, and receive your £20 Amazon or Tesco gift card at no cost."
            },
            {
                question: "When will I receive my gift card?",
                answer: "Gift cards are sent within 2-6 hours after successful verification approval. You'll receive it via email with detailed instructions on how to redeem it on Amazon or Tesco's website."
            },
            {
                question: "What if my verification is rejected?",
                answer: "If your verification is rejected, you'll receive an email explaining the specific reason and what you can do to fix it. Common issues include blurry photos or incorrect National Insurance Number format. You can resubmit improved documents at any time."
            }
        ];

        // Initialize app
        document.addEventListener('DOMContentLoaded', function() {
            generateTestimonials();
            generateFAQ();
            generateUploadCards();
            generateProgressSteps();
        });

        // Generate testimonials
        function generateTestimonials() {
            const grid = document.getElementById('testimonials-grid');
            if (!grid) return;

            grid.innerHTML = testimonials.map(testimonial => `
                <div class="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div class="mb-6">
                        <svg width="32" height="24" viewBox="0 0 32 24" fill="none" class="text-gray-300">
                            <path d="M0 24h8V12H4c0-6.627 5.373-12 12-12v-4C7.163-4 0 3.163 0 12v12zm20 0h8V12h-4c0-6.627 5.373-12 12-12v-4c-8.837 0-16 7.163-16 16v12z" fill="currentColor"/>
                        </svg>
                    </div>
                    <p class="mb-6" style="font-family: 'Inter', sans-serif; font-weight: 400; font-size: 16px; line-height: 150%; letter-spacing: -1%; color: #374151; font-style: italic;">
                        ${testimonial.text}
                    </p>
                    <div class="flex items-center">
                        <div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold mr-3" style="background-color: #4775FF;">
                            ${testimonial.initials}
                        </div>
                        <div>
                            <div style="font-family: 'Inter', sans-serif; font-weight: 600; font-size: 14px; color: #1F2937;">
                                ${testimonial.name}
                            </div>
                            <div style="font-family: 'Inter', sans-serif; font-weight: 400; font-size: 12px; color: #6B7280;">
                                ${testimonial.location}
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Generate FAQ
        function generateFAQ() {
            const faqContainer = document.getElementById('faq-items');
            if (!faqContainer) return;

            faqContainer.innerHTML = faqs.map((item, index) => `
                <div class="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                    <div class="p-6">
                        <div class="flex items-start justify-between gap-4 cursor-pointer" onclick="toggleFAQ(${index})">
                            <div class="flex-1">
                                <h3 class="text-lg font-semibold text-gray-800 mb-3" style="font-family: 'Inter', sans-serif; font-weight: 600;">
                                    ${item.question}
                                </h3>
                                <p id="faq-answer-${index}" class="text-gray-600 leading-relaxed hidden" style="font-family: 'Inter', sans-serif; font-weight: 400; font-size: 15px; line-height: 1.6;">
                                    ${item.answer}
                                </p>
                            </div>
                            <div class="flex-shrink-0 ml-4">
                                <div id="faq-icon-${index}" class="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center transition-transform duration-300">
                                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Generate upload cards
        function generateUploadCards() {
            const container = document.getElementById('upload-cards');
            if (!container) return;

            container.innerHTML = photoLabels.map((label, index) => `
                <div class="border border-gray-200 rounded-lg p-4 bg-gray-50" style="width: 518px; height: 281px; max-width: 100%;">
                    <div class="flex items-start gap-3 mb-3">
                        <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                            ${label.icon}
                        </div>
                        <div class="flex-1">
                            <h4 class="text-sm font-semibold text-gray-800 mb-1">
                                ${label.title}
                            </h4>
                            <p class="text-xs text-gray-500">
                                ${label.subtitle}
                            </p>
                        </div>
                    </div>
                    
                    <div id="photo-preview-${index}" class="w-full h-32 border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center mb-3 cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors">
                        <div class="text-3xl mb-2 text-gray-400">📤</div>
                        <span class="text-xs text-gray-500 text-center px-2">Drop file here or click to upload</span>
                    </div>
                    
                    <div class="relative">
                        <input type="file" accept="image/*" onchange="handlePhotoUpload(${index}, this.files[0])" class="absolute opacity-0 w-full h-full cursor-pointer" id="file-input-${index}">
                        <label for="file-input-${index}" class="block w-full px-4 py-2 bg-blue-600 text-white border-0 rounded-md text-xs cursor-pointer text-center font-medium transition-colors hover:bg-blue-700">
                            Choose File
                        </label>
                    </div>
                    <div class="text-xs text-gray-500 mt-1 text-center">JPG, PNG, PDF • Max 10MB</div>
                </div>
            `).join('');
        }

        // Generate progress steps
        function generateProgressSteps() {
            const container = document.getElementById('progress-steps');
            if (!container) return;

            container.innerHTML = [1, 2, 3, 4].map((step, index) => `
                <div id="step-${index}" class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium bg-gray-200 text-gray-500">
                    ${step}
                </div>
                ${index < 3 ? `<div id="line-${index}" class="flex-1 h-0.5 bg-gray-200"></div>` : ''}
            `).join('');
        }

        // Auth functions
        function openAuthModal(mode) {
            authMode = mode;
            const modal = document.getElementById('auth-modal');
            const title = document.getElementById('modal-title');
            const submitBtn = document.getElementById('auth-submit-btn');
            const toggle = document.getElementById('auth-toggle');
            const firstNameField = document.getElementById('first-name-field');
            const lastNameField = document.getElementById('last-name-field');

            modal.classList.remove('hidden');
            
            if (mode === 'login') {
                title.textContent = 'Sign In';
                submitBtn.textContent = 'Sign In';
                toggle.textContent = "Don't have an account? Sign Up";
                firstNameField.classList.add('hidden');
                lastNameField.classList.add('hidden');
            } else {
                title.textContent = 'Sign Up';
                submitBtn.textContent = 'Sign Up';
                toggle.textContent = "Already have an account? Sign In";
                firstNameField.classList.remove('hidden');
                lastNameField.classList.remove('hidden');
            }

            // Clear form
            document.getElementById('auth-form').reset();
            hideError();
        }

        function closeAuthModal() {
            document.getElementById('auth-modal').classList.add('hidden');
            document.getElementById('auth-form').reset();
            hideError();
        }

        function toggleAuthMode() {
            const newMode = authMode === 'login' ? 'register' : 'login';
            openAuthModal(newMode);
        }

        function handleAuth() {
            if (isLoading) return;
            
            isLoading = true;
            const submitBtn = document.getElementById('auth-submit-btn');
            submitBtn.textContent = 'Please wait...';
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                const firstName = document.getElementById('firstName').value;
                const lastName = document.getElementById('lastName').value;

                // Simple validation
                if (!email || !password) {
                    showError('Please fill in all required fields');
                    isLoading = false;
                    submitBtn.textContent = authMode === 'login' ? 'Sign In' : 'Sign Up';
                    submitBtn.disabled = false;
                    return;
                }

                if (authMode === 'register' && (!firstName || !lastName)) {
                    showError('Please fill in your first and last name');
                    isLoading = false;
                    submitBtn.textContent = 'Sign Up';
                    submitBtn.disabled = false;
                    return;
                }

                // Simulate successful auth
                currentUser = {
                    firstName: firstName || 'User',
                    lastName: lastName || '',
                    email: email
                };

                showUserDashboard();
                closeAuthModal();
                
                isLoading = false;
                submitBtn.textContent = authMode === 'login' ? 'Sign In' : 'Sign Up';
                submitBtn.disabled = false;

                // Show success message
                setTimeout(() => {
                    showNotification('Welcome! Please upload your documents to verify your account.', 'success');
                }, 500);
            }, 1500);
        }

        function showUserDashboard() {
            document.getElementById('landing-page').classList.add('hidden');
            document.getElementById('user-dashboard').classList.remove('hidden');
            
            // Update user name
            document.getElementById('user-name').textContent = currentUser.firstName;
            
            // Update auth buttons to show logout
            document.getElementById('auth-buttons').innerHTML = `
                <button onclick="logout()" class="px-4 py-2 bg-transparent text-gray-600 border border-gray-300 rounded-lg cursor-pointer text-sm font-medium hover:bg-gray-50 transition-colors">
                    Logout
                </button>
            `;
        }

        function logout() {
            currentUser = null;
            photos = [null, null, null, null];
            document.getElementById('user-dashboard').classList.add('hidden');
            document.getElementById('landing-page').classList.remove('hidden');
            
            // Reset auth buttons
            document.getElementById('auth-buttons').innerHTML = `
                <div class="flex gap-3">
                    <button onclick="openAuthModal('login')" class="px-5 py-2 bg-transparent text-gray-700 border-0 rounded-lg cursor-pointer text-sm font-medium hover:bg-gray-100 transition-colors" style="font-family: 'Inter', sans-serif; font-weight: 500;">Sign In</button>
                    <button onclick="openAuthModal('register')" class="px-5 py-2 bg-blue-600 text-white border-0 rounded-lg cursor-pointer text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm pulse-glow" style="font-family: 'Inter', sans-serif; font-weight: 500;">Sign Up</button>
                </div>
            `;

            generateUploadCards();
            generateProgressSteps();
            updateVerificationStatus();
        }

        // Photo upload functions
        function handlePhotoUpload(index, file) {
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function(e) {
                photos[index] = e.target.result;
                updatePhotoPreview(index, e.target.result);
                updateProgressSteps();
                updateVerificationStatus();
            };
            reader.readAsDataURL(file);
        }

        function updatePhotoPreview(index, src) {
            const preview = document.getElementById(`photo-preview-${index}`);
            if (preview) {
                preview.innerHTML = `<img src="${src}" alt="Document ${index + 1}" class="w-full h-full object-cover rounded-md">`;
                
                // Update button text
                const label = preview.parentElement.querySelector('label');
                if (label) {
                    label.textContent = 'Change File';
                }
            }
        }

        function updateProgressSteps() {
            photos.forEach((photo, index) => {
                const step = document.getElementById(`step-${index}`);
                const line = document.getElementById(`line-${index}`);
                
                if (photo) {
                    step.className = 'w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium bg-green-600 text-white';
                    if (line) {
                        line.className = 'flex-1 h-0.5 bg-green-600';
                    }
                } else {
                    step.className = 'w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium bg-gray-200 text-gray-500';
                    if (line) {
                        line.className = 'flex-1 h-0.5 bg-gray-200';
                    }
                }
            });
        }

        function updateVerificationStatus() {
            const uploadedCount = photos.filter(photo => photo !== null).length;
            const statusDot = document.getElementById('status-dot');
            const statusText = document.getElementById('status-text');
            
            if (uploadedCount === 0) {
                statusDot.className = 'w-2 h-2 rounded-full bg-orange-500';
                statusText.textContent = 'Documents not submitted';
            } else if (uploadedCount < 4) {
                statusDot.className = 'w-2 h-2 rounded-full bg-orange-500';
                statusText.textContent = 'Documents partially submitted';
            } else {
                statusDot.className = 'w-2 h-2 rounded-full bg-green-600';
                statusText.textContent = 'Documents submitted';
            }
        }

        function verifyDocuments() {
            const allFilled = photos.every(photo => photo !== null);
            
            if (!allFilled) {
                showNotification('Please upload all 4 documents before verification.', 'error');
                return;
            }

            if (isLoading) return;
            
            isLoading = true;
            const btn = document.getElementById('verify-btn');
            btn.textContent = 'Processing...';
            btn.disabled = true;

            // Simulate verification process
            setTimeout(() => {
                showNotification('Success! Documents verified. Your gift card will be sent to your email within 3 hours.', 'success');
                isLoading = false;
                btn.textContent = 'Verification Complete ✓';
                btn.className = 'px-6 py-3 bg-green-600 text-white border-0 rounded-md text-sm cursor-pointer font-medium';
            }, 3000);
        }

        // Utility functions
        function showError(message) {
            const errorDiv = document.getElementById('error-message');
            errorDiv.textContent = message;
            errorDiv.classList.remove('hidden');
        }

        function hideError() {
            document.getElementById('error-message').classList.add('hidden');
        }

        function showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 fade-in ${
                type === 'success' ? 'bg-green-500 text-white' : 
                type === 'error' ? 'bg-red-500 text-white' : 
                'bg-blue-500 text-white'
            }`;
            notification.textContent = message;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 4000);
        }

        function toggleFAQ(index) {
            const answer = document.getElementById(`faq-answer-${index}`);
            const icon = document.getElementById(`faq-icon-${index}`);
            
            answer.classList.toggle('hidden');
            icon.style.transform = answer.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
        }
