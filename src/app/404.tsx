import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const Custom404: React.FC = () => {
    return (
        <Suspense fallback={<div>กำลังโหลด...</div>}>
            <PageContent />
        </Suspense>
    );
};

const PageContent: React.FC = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get('query') || 'ไม่มีข้อมูล';

    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>404 - ไม่พบหน้าที่คุณกำลังหา</h1>
            <p>ข้อมูลที่ค้นหา: {query}</p>
        </div>
    );
};

export default Custom404;
