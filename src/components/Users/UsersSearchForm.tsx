import {Field, Form, Formik} from "formik";
import React from "react";

const usersSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;

}
export type FilterType = {
    term: string,
    friend: null|boolean
}
type PropsType={
    onFilterChanged:(filter:FilterType)=>void
}
export const UsersSearchForm:React.FC<PropsType> =React.memo( (props) => {
    const submit = (values: FilterType, {setSubmitting}: any) => {
        props.onFilterChanged(values)
        setSubmitting(false)

    }
    return <div>
        <Formik
            initialValues={{term: '',friend:null}}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type="text" name="term"/>
                    <Field name="friend" as="select">
                        <option value="null">All</option>
                        <option value="true">Followed</option>
                        <option value="false">Unfollowed</option>
                    </Field>
                    <button type="submit" disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}
        </Formik>

    </div>
})