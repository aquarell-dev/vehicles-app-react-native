import { FC } from 'react'
import Layout from '../../layouts/Layout'
import { useTranslation } from 'react-i18next'
import { Picker } from '@react-native-picker/picker'
import { supportedLanguages } from '../../../i18n/i18n.config'
import constants from '../../../../app.constants'
import { Text, View } from 'react-native'
import useStorage from '../../../hooks/useStorage'


const Settings: FC = () => {
	const {
		t,
		i18n
	} = useTranslation()
	
	const { setItem } = useStorage()
	
	return (
		<Layout>
			<View
				className='w-full p-4 mt-4 rounded-md'
				style={{
					backgroundColor: constants.colors.background.secondary
				}}
			>
				<Text
					className='text-2xl'
					style={{
						color: constants.colors.text.primary,
					}}>
					{t('selectLanguage')}
				</Text>
				<Picker
					selectedValue={i18n.language}
					onValueChange={async itemValue => {
						await i18n.changeLanguage(itemValue)
						await setItem('LANG', itemValue)
					}}
					style={{
						color: constants.colors.text.primary,
					}}
				>
					{Object.entries(supportedLanguages).map(
						(e, idx) =>
							<Picker.Item
								key={idx}
								label={e[1]}
								value={e[0]}
							/>
					)}
				</Picker>
			</View>
		</Layout>
	)
}

export default Settings