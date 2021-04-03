import $ from 'jquery';
import Inputmask from "inputmask";

const forms = () => {
    const phoneInputs = document.querySelectorAll('input[name="phone"]');

    Inputmask(
        {
            "mask": "+7(999) 999-99-99",
            "onincomplete": function(){ $(this).addClass('invalid'); $(this).removeClass('valid'); },
            "oncomplete": function(){ $(this).removeClass('invalid'); $(this).addClass('valid'); }
        }).mask(phoneInputs);

    const form = $('.not-validated');

    form.on('submit', function (e) {

        if (!this.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        }

        $(this).addClass('validated');
    });


    var isCalc = false;
    $('.js-is-calc').on('click', function () {
       isCalc = true;
    });


    $('form').on('submit', function (e) {
        e.preventDefault();

        const fd = new FormData(this);

        let calcData = {};
        if(isCalc) {
            const calcCost = $('#calc-cost').val() + ' ₽';
            const calcInitialFee = $('#calc-initial').val();
            const calcTerm = $('#calc-term').val() + ' мес.';
            const calcSum = $('#calc-sum').text();
            const calcMonthly = $('#calc-monthly').text();

            fd.append('cost', calcCost);
            fd.append('initialfee', calcInitialFee);
            fd.append('term', calcTerm);
            fd.append('sum', calcSum);
            fd.append('monthlypayment', calcMonthly);
        }

        if (this.checkValidity()) {
            $.ajax({
                url: '',
                type: 'POST',
                contentType: false,
                processData: false,
                data: fd,
                success: function () {
                    $('html').removeClass('stop');
                    $(".modal-overlay").fadeOut();
                },
                error: function () {
                    $('html').removeClass('stop');
                    $(".modal-overlay").fadeOut();
                }

            });
        }

        $('form').trigger('reset');
        isCalc = false;
    });

};

export default forms;