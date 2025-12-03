import { Authors, allAuthors } from 'contentlayer/generated'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import { GoogleTagManager } from '@next/third-parties/google'
import ResumeLayout from '@/layouts/ResumeLayout'

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <GoogleTagManager gtmId="GTM-KS758657" />
      <ResumeLayout content={mainContent}>
        <iframe
          src="https://dipalbhavsar.com/static/pdf/dipalkumar%20bhavsar.pdf"
          width="100%"
          height="800px"
          style={{ border: 'none', borderRadius: '16px' }}
          title="Dipalkumar Bhavsar Resume PDF Viewer"
        />
      </ResumeLayout>
    </>
  )
}
