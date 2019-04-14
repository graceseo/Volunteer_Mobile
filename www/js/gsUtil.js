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
            }
        }
    });
    return form.valid();
}
// jQuery.validator.addMethod("emailCheck",
//     function (value, element) {
//         var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//
//         return this.optional(element) || regex.test(value);
//     }, "Custom email checker");
