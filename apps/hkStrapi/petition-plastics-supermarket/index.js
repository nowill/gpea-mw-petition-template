import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as formActions from 'store/actions/action-types/form-actions';
// Import library
import { useInView } from 'react-intersection-observer';
import { Box, Flex } from '@chakra-ui/react';
// Import custom containers
import PageContainer from '@containers/pageContainer';
import OverflowWrapper from '@containers/overflowWrapper';
import ContentContainer from '@containers/contentContainer';
import FormContainer from '@containers/formContainer';
import PetitionFooter from '@containers/petitionFooter';
// Import custom components
import HeroBanner from '@components/ResponsiveBanner/hero';
import ThanksBanner from '@components/ResponsiveBanner/thanks';
import DonationModule from '@components/GP/DonationModule';
import SignupForm from '@components/GP/HKForm';
// Import Strapi content components
import StrapiSEO from '@components/Strapi/StrapiSEO';
import StrapiDynamicBlocks from '@components/Strapi/StrapiDynamicContent';
import StrapiFixedButton from '@components/Strapi/StrapiFixedButton';
// Import Contents
import formContent from './form';
// Import static

function Index({ submitted = false, strapi }) {
	const dispatch = useDispatch();
	const theme = useSelector((state) => state?.theme);
	const signup = useSelector((state) => state?.signup);
	const pageType = strapi?.page_type?.data?.attributes?.name;
	const [ref, inView] = useInView({
		threshold: 0
	});
	const FormRef = useRef(null);

	submitted = useSelector((state) => state?.status?.submitted);

	useEffect(() => {
		dispatch({ type: formActions.SET_FORM, data: formContent }); // set form content from form.json
	}, [dispatch]);

	return (
		<>
			<StrapiSEO strapi={strapi} />
			<Box>
				{(() => {
					if (pageType?.toLowerCase() === 'donation') {
						return (
							<HeroBanner
								defaultImage={
									theme?.params?.hero_image_desktop ||
									strapi?.contentHero?.desktopImageURL
								}
								imageSrcset={[
									{
										media: '(min-width: 48em)',
										srcset:
											theme?.params?.hero_image_desktop ||
											strapi?.contentHero?.desktopImageURL
									},
									{
										media: '',
										srcset:
											theme?.params?.hero_image_mobile ||
											strapi?.contentHero?.mobileImageURL
									}
								]}
								content={{
									title: theme?.params?.headline_prefix
										? theme?.params?.headline_prefix +
										  '<br/>' +
										  strapi?.contentHero?.richContent
										: strapi?.contentHero?.richContent,
									description: strapi?.contentHero?.richContentParagraph
								}}
							/>
						);
					} else {
						return submitted ? (
							<ThanksBanner
								defaultImage={
									theme?.params?.hero_image_desktop ||
									strapi?.thankyouHero?.desktopImageURL
								}
								imageSrcset={[
									{
										media: '(min-width: 48em)',
										srcset:
											theme?.params?.hero_image_desktop ||
											strapi?.contentHero?.desktopImageURL
									},
									{
										media: '',
										srcset:
											theme?.params?.hero_image_mobile ||
											strapi?.contentHero?.mobileImageURL
									}
								]}
								content={{
									title: signup?.data?.FirstName
										? `${signup?.data?.FirstName}，${strapi?.thankyouHero?.richContent}`
										: strapi?.thankyouHero?.richContent,
									description: strapi?.contentHero?.richContentParagraph
								}}
							/>
						) : (
							<HeroBanner
								defaultImage={
									theme?.params?.hero_image_desktop ||
									strapi?.contentHero?.desktopImageURL
								}
								imageSrcset={[
									{
										media: '(min-width: 48em)',
										srcset:
											theme?.params?.hero_image_desktop ||
											strapi?.contentHero?.desktopImageURL
									},
									{
										media: '',
										srcset:
											theme?.params?.hero_image_mobile ||
											strapi?.contentHero?.mobileImageURL
									}
								]}
								content={{
									title: theme?.params?.headline_prefix
										? theme?.params?.headline_prefix +
										  '<br/>' +
										  strapi?.contentHero?.richContent
										: strapi?.contentHero?.richContent,
									description: strapi?.contentHero?.richContentParagraph
								}}
							/>
						);
					}
				})()}
			</Box>
			<PageContainer>
				<OverflowWrapper>
					<Flex flexDirection={{ base: 'column-reverse', md: 'row' }}>
						<Box minWidth={0} flex={1} mt={{ base: 10, sm: 60 }}>
							<ContentContainer issue={strapi?.issue?.data?.attributes?.slug}>
								<>
									{submitted ? (
										<StrapiDynamicBlocks
											blocks={'thankyouBlocks'}
											strapi={strapi}
										/>
									) : (
										<StrapiDynamicBlocks
											blocks={'contentBlocks'}
											strapi={strapi}
										/>
									)}
								</>
								<>
									{pageType?.toLowerCase() === 'donation' && !submitted && (
										<>
											<Heading
												as="p"
												textAlign="center"
												py="6"
												fontSize={{ base: 'xl', md: '2xl' }}
											>
												常見問題
											</Heading>
											<DonateFAQ locale="HKChinese" />
										</>
									)}
								</>
							</ContentContainer>
						</Box>
						<Box flex={1} ref={FormRef}>
							<FormContainer>
								<Box ref={ref}>
									{pageType?.toLowerCase() === 'donation' || submitted ? (
										<DonationModule
											market={
												strapi?.market?.data?.attributes?.market === 'Hong Kong'
													? 'HK'
													: 'TW'
											}
											language={strapi?.donationModuleLanguage}
											campaign={
												theme?.params?.donation_module_campaign ??
												strapi?.donationModuleCampaign
											}
											campaignId={
												theme?.params?.campaignId ??
												strapi?.donationModuleCampaignId ??
												''
											}
											env={strapi?.donationModuleEnv}
										/>
									) : (
										<SignupForm />
									)}
								</Box>
							</FormContainer>
						</Box>
					</Flex>
				</OverflowWrapper>
			</PageContainer>
			<PetitionFooter locale={'HKChinese'} />
			<StrapiFixedButton target={FormRef} targetInView={inView} />
		</>
	);
}

export default Index;
