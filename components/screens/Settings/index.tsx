import { FC } from 'react'
import Layout from '../../layouts/Layout'
import { Picker } from '@react-native-picker/picker'
import useTranslation from '../../../hooks/useTranslation'

const Settings: FC = () => {
	const {
		i18n,
		locale,
		setLocale
	} = useTranslation()
	
	return (
		<Layout>
			<Picker
				selectedValue={locale}
				onValueChange={itemValue => {
					i18n.locale = itemValue
					setLocale(itemValue)
				}
				}>
				<Picker.Item label='English' value='en' />
				<Picker.Item label='Russian' value='ru' />
			</Picker>
		</Layout>
	)
}

export default Settings