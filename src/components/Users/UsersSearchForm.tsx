import {Field, Form, Formik} from "formik";
import React from "react";
import s from './UsersSearchForm.module.css'

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
        console.log(values)
        props.onFilterChanged(values)
        setSubmitting(false)

    }
    return <div className={s.usersFormContainer}>
        <Formik
            initialValues={{term: '',friend:null}}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form>

                    <Field className={s.inputUsersSearch} type="text" name="term" placeholder="Search name"/>
                    <Field className={s.selectUsersFilter}name="friend" as="select">
                        <option value="null">All</option>
                        <option value="true">Followed</option>
                        <option value="false">Unfollowed</option>
                    </Field>
                    <button className={s.btnUsersFilter} type="submit" disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}
        </Formik>

    </div>
})