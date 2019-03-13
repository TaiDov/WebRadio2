"use strict";function confirmDangerousAction(t){var e="Are you sure?";return $(t).data("confirm-title")&&(e=$(t).data("confirm-title")),swal({title:e,type:"warning",buttons:[!0,$(t).text()],dangerMode:!0})}function styleForm(t,e){var n=$.extend({},{placeholder:"Select...",no_results:"No results found!",advanced:"Advanced"},e),a=$(t);$(window).on("beforeunload",function(){return!1}),a.on("submit",function(){$(window).off("beforeunload")}),a.find("fieldset").addClass("form-group"),a.find("input:not(input[type=button],input[type=submit],input[type=reset],input[type=radio],input[type=checkbox]),textarea,select").addClass("form-control"),a.find("select").wrap('<div class="select" />').chosen({width:"100%",placeholder_text_single:n.placeholder,placeholder_text_multiple:n.placeholder,no_results_text:n.no_results}),autosize(a.find("textarea")),a.find("input[type=radio]").each(function(){$(this).addClass("custom-control-input"),$(this).closest(".form-field").addClass("mt-3"),$(this).next("label").addClass("custom-control-label").addBack().wrapAll('<div class="custom-control custom-radio" />')}),a.find("input[type=checkbox]").each(function(){$(this).addClass("custom-control-input"),$(this).closest(".form-field").addClass("mt-3"),$(this).next("label").addClass("custom-control-label").addBack().wrapAll('<div class="custom-control custom-checkbox" />')}),a.find(".help-block").addClass("form-text"),a.find(".help-block.form-error").parent().addClass("has-error"),a.find(".help-block.form-success").parent().addClass("has-success"),a.find(".help-block.form-warning").parent().addClass("has-warning"),a.find("label.advanced,fieldset.advanced legend").prepend('<span class="text-info">'+n.advanced+"</span> "),a.find("input[type=button],input[type=submit],input[type=reset]").addClass("btn m-t-10");var o=a.find(".has-error:visible");0<o.length&&$([document.documentElement,document.body]).animate({scrollTop:o.first().offset().top-$("#header").outerHeight()-15},1e3)}function notify(t,e,n){var a={type:e,allow_dismiss:!0,label:"Cancel",className:"btn-xs btn-inverse align-right",placement:{from:"top",align:"right"},delay:1e4,z_index:8,animate:{enter:"animated fadeIn",exit:"animated fadeOut"},offset:{x:20,y:85}};n&&(a.placement.from="top",a.placement.align="center",a.offset.y=20),$.notify({message:t},a)}$(function(){$("a.btn-danger").on("click",function(t){t.preventDefault();var e=$(this).attr("href");return confirmDangerousAction(t.target).then(function(t){t&&(window.location.href=e)}),!1})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tZGFuZ2VyLmpzIiwiZm9ybS5qcyIsIm5vdGlmeS5qcyJdLCJuYW1lcyI6WyJjb25maXJtRGFuZ2Vyb3VzQWN0aW9uIiwiZWwiLCJjb25maXJtVGl0bGUiLCIkIiwiZGF0YSIsInN3YWwiLCJ0aXRsZSIsInR5cGUiLCJidXR0b25zIiwidGV4dCIsImRhbmdlck1vZGUiLCJzdHlsZUZvcm0iLCJmb3JtIiwidHJhbnNsYXRpb25zIiwibGFuZyIsImV4dGVuZCIsInBsYWNlaG9sZGVyIiwibm9fcmVzdWx0cyIsImFkdmFuY2VkIiwiJGZvcm0iLCJ3aW5kb3ciLCJvbiIsIm9mZiIsImZpbmQiLCJhZGRDbGFzcyIsIndyYXAiLCJjaG9zZW4iLCJ3aWR0aCIsInBsYWNlaG9sZGVyX3RleHRfc2luZ2xlIiwicGxhY2Vob2xkZXJfdGV4dF9tdWx0aXBsZSIsIm5vX3Jlc3VsdHNfdGV4dCIsImF1dG9zaXplIiwiZWFjaCIsInRoaXMiLCJjbG9zZXN0IiwibmV4dCIsImFkZEJhY2siLCJ3cmFwQWxsIiwicGFyZW50IiwicHJlcGVuZCIsImVycm9yX2ZpZWxkcyIsImxlbmd0aCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiYm9keSIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJmaXJzdCIsIm9mZnNldCIsInRvcCIsIm91dGVySGVpZ2h0Iiwibm90aWZ5IiwibWVzc2FnZSIsIm1pbmltYWxfbGF5b3V0IiwiZ3Jvd2xTZXR0aW5ncyIsImFsbG93X2Rpc21pc3MiLCJsYWJlbCIsImNsYXNzTmFtZSIsInBsYWNlbWVudCIsImZyb20iLCJhbGlnbiIsImRlbGF5Iiwiel9pbmRleCIsImVudGVyIiwiZXhpdCIsIngiLCJ5IiwiZSIsInByZXZlbnREZWZhdWx0IiwibGlua1VybCIsImF0dHIiLCJ0YXJnZXQiLCJ0aGVuIiwidmFsdWUiLCJsb2NhdGlvbiIsImhyZWYiXSwibWFwcGluZ3MiOiJhQUFBLFNBQVNBLHVCQUF1QkMsR0FDNUIsSUFBSUMsRUFBZSxn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OlsiZnVuY3Rpb24gY29uZmlybURhbmdlcm91c0FjdGlvbihlbCkge1xuICAgIGxldCBjb25maXJtVGl0bGUgPSAnQXJlIHlvdSBzdXJlPyc7XG4gICAgaWYgKCQoZWwpLmRhdGEoJ2NvbmZpcm0tdGl0bGUnKSkge1xuICAgICAgICBjb25maXJtVGl0bGUgPSAkKGVsKS5kYXRhKCdjb25maXJtLXRpdGxlJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN3YWwoe1xuICAgICAgICB0aXRsZTogY29uZmlybVRpdGxlLFxuICAgICAgICB0eXBlOiAnd2FybmluZycsXG4gICAgICAgIGJ1dHRvbnM6IFt0cnVlLCAkKGVsKS50ZXh0KCldLFxuICAgICAgICBkYW5nZXJNb2RlOiB0cnVlXG4gICAgfSk7XG59XG5cbiQoZnVuY3Rpb24oKSB7XG5cbiAgICAkKCdhLmJ0bi1kYW5nZXInKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBsaW5rVXJsID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG4gICAgICAgIGNvbmZpcm1EYW5nZXJvdXNBY3Rpb24oZS50YXJnZXQpLnRoZW4oKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGxpbmtVcmw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbn0pO1xuXG4iLCJmdW5jdGlvbiBzdHlsZUZvcm0oZm9ybSwgdHJhbnNsYXRpb25zKSB7XG5cbiAgICB2YXIgbGFuZyA9ICQuZXh0ZW5kKHt9LCB7XG4gICAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJTZWxlY3QuLi5cIixcbiAgICAgICAgXCJub19yZXN1bHRzXCI6IFwiTm8gcmVzdWx0cyBmb3VuZCFcIixcbiAgICAgICAgXCJhZHZhbmNlZFwiOiBcIkFkdmFuY2VkXCJcbiAgICB9LCB0cmFuc2xhdGlvbnMpO1xuXG4gICAgdmFyICRmb3JtID0gJChmb3JtKTtcblxuICAgICQod2luZG93KS5vbignYmVmb3JldW5sb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgICRmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJCh3aW5kb3cpLm9mZignYmVmb3JldW5sb2FkJyk7XG4gICAgfSk7XG5cbiAgICAkZm9ybS5maW5kKCdmaWVsZHNldCcpLmFkZENsYXNzKCdmb3JtLWdyb3VwJyk7XG5cbiAgICAkZm9ybS5maW5kKCdpbnB1dDpub3QoaW5wdXRbdHlwZT1idXR0b25dLGlucHV0W3R5cGU9c3VibWl0XSxpbnB1dFt0eXBlPXJlc2V0XSxpbnB1dFt0eXBlPXJhZGlvXSxpbnB1dFt0eXBlPWNoZWNrYm94XSksdGV4dGFyZWEsc2VsZWN0JykuYWRkQ2xhc3MoJ2Zvcm0tY29udHJvbCcpO1xuXG4gICAgJGZvcm0uZmluZCgnc2VsZWN0Jykud3JhcCgnPGRpdiBjbGFzcz1cInNlbGVjdFwiIC8+JykuY2hvc2VuKHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBwbGFjZWhvbGRlcl90ZXh0X3NpbmdsZTogbGFuZy5wbGFjZWhvbGRlcixcbiAgICAgICAgcGxhY2Vob2xkZXJfdGV4dF9tdWx0aXBsZTogbGFuZy5wbGFjZWhvbGRlcixcbiAgICAgICAgbm9fcmVzdWx0c190ZXh0OiBsYW5nLm5vX3Jlc3VsdHNcbiAgICB9KTtcblxuICAgIGF1dG9zaXplKCRmb3JtLmZpbmQoJ3RleHRhcmVhJykpO1xuXG4gICAgJGZvcm0uZmluZCgnaW5wdXRbdHlwZT1yYWRpb10nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdjdXN0b20tY29udHJvbC1pbnB1dCcpO1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5mb3JtLWZpZWxkJykuYWRkQ2xhc3MoJ210LTMnKTtcbiAgICAgICAgJCh0aGlzKS5uZXh0KCdsYWJlbCcpLmFkZENsYXNzKCdjdXN0b20tY29udHJvbC1sYWJlbCcpLmFkZEJhY2soKS53cmFwQWxsKCc8ZGl2IGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXJhZGlvXCIgLz4nKTtcbiAgICB9KTtcbiAgICAkZm9ybS5maW5kKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sLWlucHV0Jyk7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmZvcm0tZmllbGQnKS5hZGRDbGFzcygnbXQtMycpO1xuXG4gICAgICAgICQodGhpcykubmV4dCgnbGFiZWwnKVxuICAgICAgICAgICAgLmFkZENsYXNzKCdjdXN0b20tY29udHJvbC1sYWJlbCcpXG4gICAgICAgICAgICAuYWRkQmFjaygpXG4gICAgICAgICAgICAud3JhcEFsbCgnPGRpdiBjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveFwiIC8+Jyk7XG4gICAgfSk7XG5cbiAgICAkZm9ybS5maW5kKCcuaGVscC1ibG9jaycpLmFkZENsYXNzKCdmb3JtLXRleHQnKTtcbiAgICAkZm9ybS5maW5kKCcuaGVscC1ibG9jay5mb3JtLWVycm9yJykucGFyZW50KCkuYWRkQ2xhc3MoJ2hhcy1lcnJvcicpO1xuICAgICRmb3JtLmZpbmQoJy5oZWxwLWJsb2NrLmZvcm0tc3VjY2VzcycpLnBhcmVudCgpLmFkZENsYXNzKCdoYXMtc3VjY2VzcycpO1xuICAgICRmb3JtLmZpbmQoJy5oZWxwLWJsb2NrLmZvcm0td2FybmluZycpLnBhcmVudCgpLmFkZENsYXNzKCdoYXMtd2FybmluZycpO1xuXG4gICAgLy8gbm9pbnNwZWN0aW9uIEpTQW5ub3RhdG9yXG4gICAgJGZvcm0uZmluZCgnbGFiZWwuYWR2YW5jZWQsZmllbGRzZXQuYWR2YW5jZWQgbGVnZW5kJylcbiAgICAgICAgLnByZXBlbmQoJzxzcGFuIGNsYXNzPVwidGV4dC1pbmZvXCI+JytsYW5nLmFkdmFuY2VkKyc8L3NwYW4+ICcpO1xuXG4gICAgJGZvcm0uZmluZCgnaW5wdXRbdHlwZT1idXR0b25dLGlucHV0W3R5cGU9c3VibWl0XSxpbnB1dFt0eXBlPXJlc2V0XScpLmFkZENsYXNzKCdidG4gbS10LTEwJyk7XG5cbiAgICAvLyBTY3JvbGwgdG8gZXJyb3JzLlxuICAgIHZhciBlcnJvcl9maWVsZHMgPSAkZm9ybS5maW5kKCcuaGFzLWVycm9yOnZpc2libGUnKTtcbiAgICBpZiAoZXJyb3JfZmllbGRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgJChbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSkuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IGVycm9yX2ZpZWxkcy5maXJzdCgpLm9mZnNldCgpLnRvcCAtICQoJyNoZWFkZXInKS5vdXRlckhlaWdodCgpIC0gMTVcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuXG59XG4iLCJmdW5jdGlvbiBub3RpZnkobWVzc2FnZSwgdHlwZSwgbWluaW1hbF9sYXlvdXQpIHtcblxuICAgIHZhciBncm93bFNldHRpbmdzID0ge1xuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBhbGxvd19kaXNtaXNzOiB0cnVlLFxuICAgICAgICBsYWJlbDogJ0NhbmNlbCcsXG4gICAgICAgIGNsYXNzTmFtZTogJ2J0bi14cyBidG4taW52ZXJzZSBhbGlnbi1yaWdodCcsXG4gICAgICAgIHBsYWNlbWVudDoge1xuICAgICAgICAgICAgZnJvbTogJ3RvcCcsXG4gICAgICAgICAgICBhbGlnbjogJ3JpZ2h0J1xuICAgICAgICB9LFxuICAgICAgICBkZWxheTogMTAwMDAsXG4gICAgICAgIHpfaW5kZXg6IDgsXG4gICAgICAgIGFuaW1hdGU6IHtcbiAgICAgICAgICAgIGVudGVyOiAnYW5pbWF0ZWQgZmFkZUluJyxcbiAgICAgICAgICAgIGV4aXQ6ICdhbmltYXRlZCBmYWRlT3V0J1xuICAgICAgICB9LFxuICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgIHg6IDIwLFxuICAgICAgICAgICAgeTogODVcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAobWluaW1hbF9sYXlvdXQpIHtcbiAgICAgICAgZ3Jvd2xTZXR0aW5ncy5wbGFjZW1lbnQuZnJvbSA9ICd0b3AnO1xuICAgICAgICBncm93bFNldHRpbmdzLnBsYWNlbWVudC5hbGlnbiA9ICdjZW50ZXInO1xuICAgICAgICBncm93bFNldHRpbmdzLm9mZnNldC55ID0gMjA7XG4gICAgfVxuXG4gICAgJC5ub3RpZnkoeyBtZXNzYWdlOiBtZXNzYWdlIH0sIGdyb3dsU2V0dGluZ3MpO1xuXG59XG4iXX0=