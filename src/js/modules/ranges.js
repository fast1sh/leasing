import $ from 'jquery';
import noUiSlider from 'nouislider';
import { initialFeeCalculate, sumCalculate, monthlyPaymentCalculate } from './calculator';

const ranges = () => {
    const costSlider = $('#calc-cost-range')[0],
        costInput = $('#calc-cost')[0],
        initialSlider = $('#calc-initial-range')[0],
        initialInput = $('#calc-initial')[0],
        termSlider = $('#calc-term-range')[0],
        termInput = $('#calc-term')[0],
        initialValue = $('.js-calc-initial'),
        sumValue = $('.js-calc-sum'),
        monthlyValue = $('.js-calc-monthly');

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    noUiSlider.create(costSlider, {
        start: [3300000],
        connect: [true, false],
        step: 10000,
        range: {
            'min': 1000000,
            'max': 6000000
        },
        format: {
            to: (v) => parseFloat(v).toFixed(0),
            from: (v) => parseFloat(v).toFixed(0)
        }
    });

    costSlider.noUiSlider.on('update', function (values, handle) {
        costInput.value = numberWithSpaces(values[handle]);

        const initialPercent = initialInput.value.replace(/\D/g, '') / 100,
            cost = values[handle];
        initialValue.text(`${numberWithSpaces(parseFloat(initialFeeCalculate(initialPercent, cost)).toFixed(0))} ₽`);

        const initialFee = initialValue.text().replace(/\D/g, ''),
            term = termInput.value;
        monthlyValue.text(`${numberWithSpaces(parseFloat(monthlyPaymentCalculate(cost, initialFee, 0.01, term)).toFixed(0))} ₽`);

        const monthlyPayment = monthlyValue.text().replace(/\D/g, '');

        sumValue.text(`${numberWithSpaces(parseFloat(sumCalculate(initialFee, term, monthlyPayment)).toFixed(0))} ₽`);

    });

    costInput.addEventListener('change', function () {
        costSlider.noUiSlider.set(this.value);
    });

    costInput.addEventListener('input', () => {
        costInput.value = costInput.value.replace(/\D/g, '');
    });

    noUiSlider.create(initialSlider, {
        start: [13],
        connect: [true, false],
        range: {
            'min': 10,
            'max': 60
        },
        format: {
            to: (v) => parseFloat(v).toFixed(0),
            from: (v) => parseFloat(v).toFixed(0)
        }
    });

    initialSlider.noUiSlider.on('update', function (values, handle) {
        initialInput.value = `${values[handle]}%`;

        const initialPercent = values[handle].replace(/\D/g, '') / 100,
            cost = costInput.value.replace(/\D/g, '');
        initialValue.text(`${numberWithSpaces(parseFloat(initialFeeCalculate(initialPercent, cost)).toFixed(0))} ₽`);

        const initialFee = initialValue.text().replace(/\D/g, ''),
            term = termInput.value;
        monthlyValue.text(`${numberWithSpaces(parseFloat(monthlyPaymentCalculate(cost, initialFee, 0.01, term)).toFixed(0))} ₽`);

        const monthlyPayment = monthlyValue.text().replace(/\D/g, '');

        sumValue.text(`${numberWithSpaces(parseFloat(sumCalculate(initialFee, term, monthlyPayment)).toFixed(0))} ₽`);
    });

    initialInput.addEventListener('change', function () {
        initialSlider.noUiSlider.set(this.value);
    });

    initialInput.addEventListener('input', () => {
        initialInput.value = `${initialInput.value.replace(/\D/g, '')}%`;
    });

    noUiSlider.create(termSlider, {
        start: [60],
        connect: [true, false],
        range: {
            'min': 1,
            'max': 60
        },
        format: {
            to: (v) => parseFloat(v).toFixed(0),
            from: (v) => parseFloat(v).toFixed(0)
        }
    });

    termSlider.noUiSlider.on('update', function (values, handle) {
        termInput.value = values[handle];

        const cost = costInput.value.replace(/\D/g, '');

        const initialFee = initialValue.text().replace(/\D/g, ''),
            term = termInput.value;
        monthlyValue.text(`${numberWithSpaces(parseFloat(monthlyPaymentCalculate(cost, initialFee, 0.01, term)).toFixed(0))} ₽`);

        const monthlyPayment = monthlyValue.text().replace(/\D/g, '');

        sumValue.text(`${numberWithSpaces(parseFloat(sumCalculate(initialFee, term, monthlyPayment)).toFixed(0))} ₽`);

    });

    termInput.addEventListener('change', function () {
        termSlider.noUiSlider.set(this.value);
    });

    termInput.addEventListener('input', () => {
        termInput.value = termInput.value.replace(/\D/g, '');
    });
};

export default ranges;