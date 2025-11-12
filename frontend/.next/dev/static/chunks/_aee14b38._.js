(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/cbv-flow-invitations/page.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "innerHeaderWrapper": "page-module__Oi2QHq__innerHeaderWrapper",
  "innerWrapper": "page-module__Oi2QHq__innerWrapper",
  "mainTitle": "page-module__Oi2QHq__mainTitle",
  "wrapper": "page-module__Oi2QHq__wrapper",
});
}),
"[project]/src/components/FormWrapper/FormWrapper.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "buttonWrapper": "FormWrapper-module__P-_59q__buttonWrapper",
  "fieldset": "FormWrapper-module__P-_59q__fieldset",
  "form": "FormWrapper-module__P-_59q__form",
  "sendButton": "FormWrapper-module__P-_59q__sendButton",
  "wrapper": "FormWrapper-module__P-_59q__wrapper",
});
}),
"[project]/src/components/FormWrapper/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FormWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormWrapper$2f$FormWrapper$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/FormWrapper/FormWrapper.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trussworks$2f$react$2d$uswds$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@trussworks/react-uswds/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function FormWrapper({ data }) {
    _s();
    function formSubmit(event) {
        event.preventDefault();
        console.log("Form submitted");
        const formData = new FormData(event.currentTarget);
        const dataObj = Object.fromEntries(formData.entries());
        console.log(dataObj);
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    function handleClick() {
        router.push("/"); //home for now
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormWrapper$2f$FormWrapper$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper} bg-base-lighter`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trussworks$2f$react$2d$uswds$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
                onSubmit: formSubmit,
                large: true,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormWrapper$2f$FormWrapper$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                children: data?.fieldSets.map((fieldSet, fieldSetIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trussworks$2f$react$2d$uswds$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fieldset"], {
                        legend: fieldSet.legend,
                        legendStyle: fieldSet.legendStyle,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormWrapper$2f$FormWrapper$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldset,
                        children: fieldSet.children?.map((child, childIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormWrapper$2f$FormWrapper$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldWrapper,
                                children: [
                                    child.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trussworks$2f$react$2d$uswds$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: child.label.htmlFor,
                                        children: child.label.text
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FormWrapper/index.tsx",
                                        lineNumber: 46,
                                        columnNumber: 19
                                    }, this),
                                    child.span && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: child.span.className,
                                        children: child.span.text
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FormWrapper/index.tsx",
                                        lineNumber: 51,
                                        columnNumber: 19
                                    }, this),
                                    child.textInput ? child.textInput.type === "date" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: child.textInput.id,
                                        name: child.textInput.name,
                                        type: "date",
                                        className: "usa-input"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FormWrapper/index.tsx",
                                        lineNumber: 58,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trussworks$2f$react$2d$uswds$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                                        id: child.textInput.id,
                                        name: child.textInput.name,
                                        type: child.textInput.type
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FormWrapper/index.tsx",
                                        lineNumber: 65,
                                        columnNumber: 21
                                    }, this) : child.radioGroup ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "usa-radio-group",
                                        children: child.radioGroup.options.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "usa-radio usa-radio--tile",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "usa-radio__input usa-radio__input--tile",
                                                        id: `${child.radioGroup.name}-${option.value}-${index}`,
                                                        name: child.radioGroup.name,
                                                        type: "radio",
                                                        value: option.value,
                                                        "aria-label": option.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FormWrapper/index.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "usa-radio__label",
                                                        htmlFor: `${child.radioGroup.name}-${option.value}-${index}`,
                                                        children: option.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FormWrapper/index.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/components/FormWrapper/index.tsx",
                                                lineNumber: 83,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FormWrapper/index.tsx",
                                        lineNumber: 81,
                                        columnNumber: 19
                                    }, this) : null
                                ]
                            }, childIndex, true, {
                                fileName: "[project]/src/components/FormWrapper/index.tsx",
                                lineNumber: 44,
                                columnNumber: 15
                            }, this))
                    }, fieldSetIndex, false, {
                        fileName: "[project]/src/components/FormWrapper/index.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/FormWrapper/index.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormWrapper$2f$FormWrapper$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonWrapper,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trussworks$2f$react$2d$uswds$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "submit",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormWrapper$2f$FormWrapper$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sendButton,
                    onClick: handleClick,
                    children: "Send Invitation"
                }, void 0, false, {
                    fileName: "[project]/src/components/FormWrapper/index.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/FormWrapper/index.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FormWrapper/index.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(FormWrapper, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = FormWrapper;
var _c;
__turbopack_context__.k.register(_c, "FormWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/cbv-flow-invitations/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CBVFlowInvitations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$cbv$2d$flow$2d$invitations$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/cbv-flow-invitations/page.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trussworks$2f$react$2d$uswds$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@trussworks/react-uswds/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LocaleContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormWrapper$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FormWrapper/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CBVFlowInvitations({ payIncomeDays = 30 }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    const translate = (key, fallback, options)=>{
        const result = t(key, options);
        return result === key ? fallback : result;
    };
    const renderHTML = (html)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            dangerouslySetInnerHTML: {
                __html: html
            }
        }, void 0, false, {
            fileName: "[project]/src/app/cbv-flow-invitations/page.tsx",
            lineNumber: 28,
            columnNumber: 5
        }, this);
    // Name Fieldset
    const nameFields = {
        legend: translate("en.caseworker.cbv_flow_invitations.invite.name_legend", "Applicant name"),
        legendStyle: "large",
        children: [
            {
                label: {
                    htmlFor: "cbv_applicant_first_name",
                    text: translate("en.caseworker.cbv_flow_invitations.invite.first_name", "First name")
                },
                textInput: {
                    id: "cbv_applicant_first_name",
                    name: "cbv_applicant[first_name]",
                    type: "text"
                }
            },
            {
                label: {
                    htmlFor: "cbv_applicant_middle_name",
                    text: translate("en.caseworker.cbv_flow_invitations.invite.middle_name", "Middle name")
                },
                textInput: {
                    id: "cbv_applicant_middle_name",
                    name: "cbv_applicant[middle_name]",
                    type: "text"
                }
            },
            {
                label: {
                    htmlFor: "cbv_applicant_last_name",
                    text: translate("en.caseworker.cbv_flow_invitations.invite.last_name", "Last name")
                },
                textInput: {
                    id: "cbv_applicant_last_name",
                    name: "cbv_applicant[last_name]",
                    type: "text"
                }
            }
        ]
    };
    // Client details
    const detailKeys = [
        "case_number",
        "beacon_id",
        "agency_id_number",
        "client_id_number",
        "snap_application_date",
        "email_address"
    ];
    const detailFields = {
        legend: translate("en.caseworker.cbv_flow_invitations.invite.client_info", "Client information"),
        legendStyle: "large",
        children: detailKeys.map((key)=>({
                label: {
                    htmlFor: `cbv_applicant_${key}`,
                    text: translate(`en.caseworker.cbv_flow_invitations.invite.${key}`, key.replace(/_/g, " ").replace(/\b\w/g, (c)=>c.toUpperCase()))
                },
                textInput: {
                    id: `cbv_applicant_${key}`,
                    name: `cbv_applicant[${key}]`,
                    type: key === "email_address" ? "email" : key === "snap_application_date" ? "date" : "text"
                }
            }))
    };
    // Language radio buttons
    const languageOptions = [
        {
            value: "en",
            label: "English"
        },
        {
            value: "es",
            label: "Spanish"
        },
        {
            value: "vi",
            label: "Vietnamese"
        },
        {
            value: "zh",
            label: "Chinese"
        }
    ];
    const languageFieldset = {
        legend: translate("en.caseworker.cbv_flow_invitations.invite.language_label", "Preferred language"),
        legendStyle: "large",
        children: [
            {
                radioGroup: {
                    name: "cbv_applicant[language]",
                    options: languageOptions
                }
            }
        ]
    };
    // Combine all fieldsets
    const formData = {
        fieldSets: [
            nameFields,
            detailFields,
            languageFieldset
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$cbv$2d$flow$2d$invitations$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$cbv$2d$flow$2d$invitations$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].innerWrapper} bg-base-lightest`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$cbv$2d$flow$2d$invitations$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].innerHeaderWrapper,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trussworks$2f$react$2d$uswds$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$cbv$2d$flow$2d$invitations$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainTitle,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: translate("en.caseworker.cbv_flow_invitations.new.header", "Send an invite link")
                            }, void 0, false, {
                                fileName: "[project]/src/app/cbv-flow-invitations/page.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/cbv-flow-invitations/page.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$cbv$2d$flow$2d$invitations$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                            children: renderHTML(translate("en.caseworker.cbv_flow_invitations.new.description_html.default", `Provide some details about the client so we can send them a link to verify their pay information. We'll request the past ${payIncomeDays} days of income, based on the client's application or recertification date.`, {
                                pay_income_days: payIncomeDays
                            }))
                        }, void 0, false, {
                            fileName: "[project]/src/app/cbv-flow-invitations/page.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/cbv-flow-invitations/page.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormWrapper$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    data: formData
                }, void 0, false, {
                    fileName: "[project]/src/app/cbv-flow-invitations/page.tsx",
                    lineNumber: 174,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/cbv-flow-invitations/page.tsx",
            lineNumber: 152,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/cbv-flow-invitations/page.tsx",
        lineNumber: 151,
        columnNumber: 5
    }, this);
}
_s(CBVFlowInvitations, "XHTLWhiyaNJXAkpx8ws1crwFino=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"]
    ];
});
_c = CBVFlowInvitations;
var _c;
__turbopack_context__.k.register(_c, "CBVFlowInvitations");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_aee14b38._.js.map