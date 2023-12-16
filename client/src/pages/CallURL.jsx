import React, { useState } from 'react';
import axios from 'axios';

const CallUrl = () => {
    const [url, setUrl] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchResponse = async () => {
        setLoading(true);
        try {
            const data = { url: url }; // Đóng gói URL trong dạng yêu cầu của bạn
            const result = await axios.post('http://localhost:5000/geturl', data);
            setResponse(result.data);
        } catch (error) {
            console.error('Lỗi: ' + error.message);
        }
        setLoading(false);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">Giao diện hiển thị phản hồi từ URL</h1>
            <div className="mb-4">
                <label className="mr-2">Nhập URL:</label>
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="border p-1 w-1/2"
                />
                <button
                    onClick={fetchResponse}
                    className="bg-blue-500 text-white p-2 ml-2"
                >
                    Gửi yêu cầu
                </button>
            </div>
            {loading ? (
                <p>Đang tải...</p>
            ) : (
                <div>
                    {response ? (
                        <div>
                            <pre className="whitespace-pre-wrap">{JSON.stringify(response, null, 2)}</pre>
                        </div>
                    ) : (
                        <p>Không có dữ liệu khả dụng cho URL này.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default CallUrl;
