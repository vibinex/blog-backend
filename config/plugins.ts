export default ({ env }) => ({
	upload: {
		config: {
			provider: 'strapi-provider-upload-gcs-cdn',
			providerOptions: {
				bucketName: env('GCS_BUCKET_NAME'),
				publicFiles: true, // set to false if you want private files
				uniform: true, // set to true for uniform bucket-level access
				serviceAccount: env.json('GCS_SERVICE_ACCOUNT'), // your service account JSON
				baseUrl: 'https://storage.googleapis.com/{bucket-name}',
				basePath: '', // optional base path in bucket
				cdn_url: env('GCS_CDN_URL'), // optional CDN URL if you're using one
			},
		},
	},
});
