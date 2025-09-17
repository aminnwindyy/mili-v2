// Core Integration Functions for MelkChain Platform

export const InvokeLLM = async (prompt, options = {}) => {
  // AI/LLM integration for smart features
  try {
    const response = await fetch('/api/llm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        ...options
      })
    });
    return await response.json();
  } catch (error) {
    console.error('LLM invocation failed:', error);
    throw error;
  }
};

export const SendEmail = async (to, subject, body, options = {}) => {
  // Email service integration
  try {
    const response = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to,
        subject,
        body,
        ...options
      })
    });
    return await response.json();
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};

export const UploadFile = async (file, options = {}) => {
  // File upload service integration
  try {
    const formData = new FormData();
    formData.append('file', file);
    
    Object.keys(options).forEach(key => {
      formData.append(key, options[key]);
    });

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    });
    return await response.json();
  } catch (error) {
    console.error('File upload failed:', error);
    throw error;
  }
};

export const GenerateImage = async (prompt, options = {}) => {
  // AI image generation integration
  try {
    const response = await fetch('/api/generate-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        ...options
      })
    });
    return await response.json();
  } catch (error) {
    console.error('Image generation failed:', error);
    throw error;
  }
};

// Blockchain integration functions
export const BlockchainAPI = {
  createToken: async (propertyData) => {
    // Create property token on blockchain
    try {
      const response = await fetch('/api/blockchain/create-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(propertyData)
      });
      return await response.json();
    } catch (error) {
      console.error('Token creation failed:', error);
      throw error;
    }
  },

  transferToken: async (from, to, tokenId, amount) => {
    // Transfer tokens between users
    try {
      const response = await fetch('/api/blockchain/transfer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ from, to, tokenId, amount })
      });
      return await response.json();
    } catch (error) {
      console.error('Token transfer failed:', error);
      throw error;
    }
  },

  getBalance: async (address, tokenId) => {
    // Get token balance for address
    try {
      const response = await fetch(`/api/blockchain/balance/${address}/${tokenId}`);
      return await response.json();
    } catch (error) {
      console.error('Balance check failed:', error);
      throw error;
    }
  }
};

// Payment integration
export const PaymentAPI = {
  processPayment: async (paymentData) => {
    try {
      const response = await fetch('/api/payment/process', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData)
      });
      return await response.json();
    } catch (error) {
      console.error('Payment processing failed:', error);
      throw error;
    }
  },

  refundPayment: async (transactionId) => {
    try {
      const response = await fetch('/api/payment/refund', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ transactionId })
      });
      return await response.json();
    } catch (error) {
      console.error('Payment refund failed:', error);
      throw error;
    }
  }
};
