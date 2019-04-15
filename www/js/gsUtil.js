/**
 * File Name: gsUtil.js
 *
 * Revision History:
 *        Gyeonglim Seo, 2019-04-10 : Created
 */

/**
 * Check validation for Adding a review
 * @returns {*|jQuery|boolean}
 */
function gsDoValidate_gsFrmAddWork() {
    var form=$("#gsFrmAddWork");
    form.validate({
        rules:{
            gsWorkOrgzNameAdd:{
                required: true,
                minlength:2,
                maxlength:50
            },
            gsWorkOrgzContectNameAdd:{
                required: true,
                minlength:2,
                maxlength:20
            },
            gsWorkOrgzContectPhoneAdd:{
                required:true,
                minlength:2,
                maxlength:20
            },
            gsWorkOrgzContectAddressAdd:{
                required:true,
                minlength:2,
                maxlength:100
            },
            gsWorkPositionAdd:{
                required:true,
                minlength:2,
                maxlength:30
            },
            gsWorkStartDateAdd:{
                required:true
            },
            gsWorkEndDateAdd:{
                required:true,
                dateCheck: true
            }
        },
        messages:{
            gsWorkOrgzNameAdd:{
                required: "Organization name is required",
                minlength:"Length must be 2-50 characters long",
                maxlength:"Length must be 2-50 characters long"
            },
            gsWorkOrgzContectNameAdd:{
                required: "Contect name is required",
                minlength:"Length must be 2-20 characters long",
                maxlength:"Length must be 2-20 characters long"
            },
            gsWorkOrgzContectPhoneAdd:{
                required:"Contect Phone number is required",
                minlength:"Length must be 2-20 characters long",
                maxlength:"Length must be 2-20 characters long"
            },
            gsWorkOrgzContectAddressAdd:{
                required:"Contect address is required",
                minlength:"Length must be 2-100 characters long",
                maxlength:"Length must be 2-100 characters long"
            },
            gsWorkPositionAdd:{
                required:"Contect address is required",
                minlength:"Length must be 2-30 characters long",
                maxlength:"Length must be 2-30 characters long"
            },
            gsWorkStartDateAdd:{
                required:"Start date is required"
            },
            gsWorkEndDateAdd:{
                required:"End data is requried",
                dateCheck:"The end date should be more future than the start date"
            }
        }
    });
    return form.valid();
}

function gsDoValidate_gsFrmEditWork() {
    var form=$("#gsFrmEditWork");
    form.validate({
        rules:{
            gsWorkOrgzNameEdit:{
                required: true,
                minlength:2,
                maxlength:50
            },
            gsWorkOrgzContectNameEdit:{
                required: true,
                minlength:2,
                maxlength:20
            },
            gsWorkOrgzContectPhoneEdit:{
                required:true,
                minlength:2,
                maxlength:20
            },
            gsWorkOrgzContectAddressEdit:{
                required:true,
                minlength:2,
                maxlength:100
            },
            gsWorkPositionEdit:{
                required:true,
                minlength:2,
                maxlength:30
            },
            gsWorkStartDateEdit:{
                required:true
            },
            gsWorkEndDateEdit:{
                required:true,
                dateEditCheck: true
            }
        },
        messages:{
            gsWorkOrgzNameEdit:{
                required: "Organization name is required",
                minlength:"Length must be 2-50 characters long",
                maxlength:"Length must be 2-50 characters long"
            },
            gsWorkOrgzContectNameEdit:{
                required: "Contect name is required",
                minlength:"Length must be 2-20 characters long",
                maxlength:"Length must be 2-20 characters long"
            },
            gsWorkOrgzContectPhoneEdit:{
                required:"Contect Phone number is required",
                minlength:"Length must be 2-20 characters long",
                maxlength:"Length must be 2-20 characters long"
            },
            gsWorkOrgzContectAddressEdit:{
                required:"Contect address is required",
                minlength:"Length must be 2-100 characters long",
                maxlength:"Length must be 2-100 characters long"
            },
            gsWorkPositionEdit:{
                required:"Contect address is required",
                minlength:"Length must be 2-30 characters long",
                maxlength:"Length must be 2-30 characters long"
            },
            gsWorkStartDateEdit:{
                required:"Start date is required"
            },
            gsWorkEndDateEdit:{
                required:"End data is requried",
                dateCheck:"The end date should be more future than the start date"
            }
        }
    });
    return form.valid();
}
 jQuery.validator.addMethod("dateCheck",
     function (value, element) {
         var startDateValue = $("#gsWorkStartDateAdd").val();
         return Date.parse(startDateValue) < Date.parse(value);
}, "Custom date checker");
jQuery.validator.addMethod("dateEditCheck",
    function (value, element) {
        var startDateValue = $("#gsWorkStartDateEdit").val();
        return Date.parse(startDateValue) < Date.parse(value);
    }, "Custom date checker");
