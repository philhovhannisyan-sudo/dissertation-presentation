// Current slide tracking
let currentSlide = 1;
const totalSlides = 28;

// Initialize presentation
function initPresentation() {
    showSlide(currentSlide);
    createCharts();
}

// Show specific slide
function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const slideCounter = document.getElementById('slideCounter');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (n > totalSlides) {
        currentSlide = totalSlides;
    } else if (n < 1) {
        currentSlide = 1;
    } else {
        currentSlide = n;
    }

    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Show current slide
    slides[currentSlide - 1].classList.add('active');

    // Update counter
    slideCounter.textContent = `${currentSlide} / ${totalSlides}`;

    // Update button states
    prevBtn.disabled = currentSlide === 1;
    nextBtn.disabled = currentSlide === totalSlides;

    // Create charts for current slide if needed
    createChartsForSlide(currentSlide);
}

// Change slide
function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Create charts for specific slide
function createChartsForSlide(slideNum) {
    switch(slideNum) {
        case 13:
            createVSSChart();
            createVUSChart();
            break;
        case 14:
            createSwellingChart();
            break;
        case 15:
            createSolubilityMezgaChart();
            break;
        case 16:
            createParticleSizeChart();
            break;
        case 21:
            createMetalBindingChart();
            break;
        case 25:
            createCO2Chart();
            createBiomassChart();
            break;
        case 26:
            createAcidityChart();
            createOrganicAcidsChart();
            break;
    }
}

// Create all charts
function createCharts() {
    // Charts will be created when slides are shown
}

// Chart 1: VSS (Водосвязывающая способность)
function createVSSChart() {
    const ctx = document.getElementById('vssChart');
    if (!ctx || ctx.chart) return;

    ctx.chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Без ФП конв.', 'С ФП конв.', 'С ФП вак.'],
            datasets: [{
                label: 'ВСС, г/г',
                data: [3.8, 4.8, 6.2],
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 7,
                    title: {
                        display: true,
                        text: 'г/г'
                    }
                }
            }
        }
    });
}

// Chart 2: VUS (Влагоудерживающая способность)
function createVUSChart() {
    const ctx = document.getElementById('vusChart');
    if (!ctx || ctx.chart) return;

    ctx.chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Без ФП конв.', 'С ФП конв.', 'С ФП вак.'],
            datasets: [{
                label: 'ВУС, %',
                data: [58, 72, 85],
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: '%'
                    }
                }
            }
        }
    });
}

// Chart 3: Swelling dynamics
function createSwellingChart() {
    const ctx = document.getElementById('swellingChart');
    if (!ctx || ctx.chart) return;

    ctx.chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['0', '15', '30', '45', '60', '75', '90', '120'],
            datasets: [
                {
                    label: 'Без ФП конв.',
                    data: [0, 2.1, 3.5, 4.2, 4.8, 5.2, 5.5, 5.5],
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'С ФП конв.',
                    data: [0, 2.8, 4.2, 5.5, 6.2, 6.5, 6.5, 6.5],
                    borderColor: '#FFC185',
                    backgroundColor: 'rgba(255, 193, 133, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'С ФП вак.',
                    data: [0, 3.2, 5.0, 6.5, 7.2, 7.5, 7.5, 7.5],
                    borderColor: '#B4413C',
                    backgroundColor: 'rgba(180, 65, 60, 0.1)',
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Динамика набухания порошков во времени'
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Время, мин'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Степень набухания, г/г'
                    }
                }
            }
        }
    });
}

// Chart 4: Solubility of mezga
function createSolubilityMezgaChart() {
    const ctx = document.getElementById('solubilityMezgaChart');
    if (!ctx || ctx.chart) return;

    ctx.chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Без обработки\n(конвективная)', 'С Vegazym M\n(конвективная)', 'С Vegazym M\n(вакуумная)'],
            datasets: [{
                label: 'Растворимость, %',
                data: [58, 62, 80],
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Растворимость порошков из яблочной мезги'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Растворимость, %'
                    }
                }
            }
        }
    });
}

// Chart 5: Particle size effect
function createParticleSizeChart() {
    const ctx = document.getElementById('particleSizeChart');
    if (!ctx || ctx.chart) return;

    ctx.chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['250', '315', '385', '445', '500', '630'],
            datasets: [{
                label: 'Растворимость, %',
                data: [62, 68, 73, 79, 76, 70],
                borderColor: '#0230AC',
                backgroundColor: 'rgba(2, 48, 172, 0.1)',
                tension: 0.4,
                fill: true,
                pointRadius: 5,
                pointBackgroundColor: '#0230AC'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Размер частиц, мкм'
                    }
                },
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Растворимость, %'
                    }
                }
            }
        }
    });
}

// Chart 6: Metal binding
function createMetalBindingChart() {
    const ctx = document.getElementById('metalBindingChart');
    if (!ctx || ctx.chart) return;

    ctx.chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Cu²⁺', 'Co²⁺', 'Ni²⁺', 'Pb²⁺'],
            datasets: [
                {
                    label: 'Без ФП',
                    data: [12.5, 8.2, 6.8, 15.8],
                    backgroundColor: '#1FB8CD'
                },
                {
                    label: 'С ФП',
                    data: [28.4, 18.6, 15.2, 35.2],
                    backgroundColor: '#B4413C'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Способность связывать ионы металлов (мг/г)'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'мг металла / г пектина'
                    }
                }
            }
        }
    });
}

// Chart 7: CO2 emission
function createCO2Chart() {
    const ctx = document.getElementById('co2Chart');
    if (!ctx || ctx.chart) return;

    ctx.chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['0', '24', '48', '72', '96', '120', '144'],
            datasets: [
                {
                    label: 'Контроль',
                    data: [0, 1.2, 2.8, 4.5, 6.2, 7.5, 8.2],
                    borderColor: '#1FB8CD',
                    tension: 0.4
                },
                {
                    label: 'Способ I',
                    data: [0, 1.5, 3.5, 5.2, 7.2, 8.5, 9.2],
                    borderColor: '#FFC185',
                    tension: 0.4
                },
                {
                    label: 'Способ II',
                    data: [0, 1.8, 4.0, 5.8, 7.8, 9.2, 10.0],
                    borderColor: '#B4413C',
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'top'
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Время, ч'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'CO₂, г/100 мл'
                    }
                }
            }
        }
    });
}

// Chart 8: Biomass growth
function createBiomassChart() {
    const ctx = document.getElementById('biomassChart');
    if (!ctx || ctx.chart) return;

    ctx.chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['0', '24', '48', '72', '96', '120', '144'],
            datasets: [
                {
                    label: 'Контроль',
                    data: [0.5, 2.1, 4.5, 7.2, 10.5, 12.8, 14.2],
                    borderColor: '#1FB8CD',
                    tension: 0.4
                },
                {
                    label: 'Способ I',
                    data: [0.5, 2.8, 5.8, 9.2, 13.5, 16.2, 17.8],
                    borderColor: '#FFC185',
                    tension: 0.4
                },
                {
                    label: 'Способ II',
                    data: [0.5, 3.2, 6.5, 10.5, 15.2, 18.5, 20.5],
                    borderColor: '#B4413C',
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'top'
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Время, ч'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Биомасса, г/л'
                    }
                }
            }
        }
    });
}

// Chart 9: Acidity dynamics
function createAcidityChart() {
    const ctx = document.getElementById('acidityChart');
    if (!ctx || ctx.chart) return;

    ctx.chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['0', '2', '4', '6', '8', '10', '12'],
            datasets: [
                {
                    label: 'Контроль',
                    data: [20, 35, 52, 68, 78, 85, 88],
                    borderColor: '#1FB8CD',
                    tension: 0.4
                },
                {
                    label: '3% порошка',
                    data: [20, 38, 58, 75, 85, 92, 95],
                    borderColor: '#FFC185',
                    tension: 0.4
                },
                {
                    label: '5% порошка',
                    data: [20, 42, 65, 82, 92, 98, 102],
                    borderColor: '#B4413C',
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'top'
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Время ферментации, ч'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Кислотность, °T'
                    }
                }
            }
        }
    });
}

// Chart 10: Organic acids
function createOrganicAcidsChart() {
    const ctx = document.getElementById('organicAcidsChart');
    if (!ctx || ctx.chart) return;

    ctx.chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Молочная', 'Яблочная', 'Лимонная', 'Уксусная'],
            datasets: [
                {
                    label: 'Контроль',
                    data: [7.2, 0.5, 0.2, 0.1],
                    backgroundColor: '#1FB8CD'
                },
                {
                    label: '3% порошка',
                    data: [8.5, 1.2, 0.4, 0.2],
                    backgroundColor: '#FFC185'
                },
                {
                    label: '5% порошка',
                    data: [9.8, 1.8, 0.6, 0.3],
                    backgroundColor: '#B4413C'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Содержание органических кислот, г/кг'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Содержание, г/кг'
                    }
                }
            }
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initPresentation);

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
        changeSlide(1);
    }
});