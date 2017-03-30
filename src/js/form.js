import jQuery from 'jquery';

class Form {
	constructor(){
        jQuery(document).ready(function($) {

            $('#consultation-form').submit(function(e){
                e.preventDefault();
                var form = $(this);
                var form_results = $('#form-results');

                form_results.html(' ');
                form_results.removeClass('alert');
                form_results.removeClass('alert-error');
                form_results.removeClass('alert-success');

                form.find('.btn').prop('disabled', true);

                var errors = [];

                if( form.find('input[name=name]').val() == "" ) { errors.push('The name field is required'); }
                if( form.find('input[name=email]').val() == "" ) { errors.push('The email field is required'); }

                if( errors.length > 0 ){

                    var error_html = '<ul>';
                    form_results.addClass('alert');
                    form_results.addClass('alert-info');

                    $.each(errors, function( index, value ) {
                        error_html += '<li>' +value+ '</li>';
                    });
                    error_html += '</ul>';

                    form_results.html(error_html);
                    form.find('.btn').prop('disabled', false);
                    return false;
                }

                var data = {
                    action: 'do_ajax',
                    fn: 'consultation-form',
                    data: form.serializeArray()
                };

                jQuery.post( the_theme.url + '/wp-admin/admin-ajax.php' , data, function(response) {

                    form.find('.btn').prop('disabled', false);
                    $('#form-results').html(response);
                    window.setTimeout(function(){
                        $(location).attr('pathname', '/dev/abs/thank-you')
                    }, 1000);

                }, 'json');
            });
        });
    }
}
export default Form;