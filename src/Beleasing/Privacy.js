import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Privacy = () => {

    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getFullYear()}`;


    return (
        <div>
            <Container className="my-5">
                <Row className="justify-content-center">
                    <Col md={10} lg={8}>
                        <Card className="p-4 shadow-lg border-0">
                            <Card.Body>
                                <h2 className="text-center mb-4">Privacy Policy</h2>
                                <p><strong>Effective Date:</strong> {formattedDate}</p>
                                <p>Welcome to <a href='/'>driveora.live</a> ("we," "our," or "us"). Your privacy is important to us. This Privacy Policy explains how we handle information when you visit our website.</p>

                                <h4>1. Information We Collect</h4>
                                <p>We do not collect personal data like names, emails, or phone numbers. However, some third-party services may collect non-personal data automatically, such as:</p>
                                <ul>
                                    <li>IP address</li>
                                    <li>Browser type and version</li>
                                    <li>Device type</li>
                                    <li>Referring website</li>
                                    <li>Pages visited and time spent on our site</li>
                                </ul>

                                <h4>2. Use of Cookies & Tracking Technologies</h4>
                                <h5>a. Advertising Cookies</h5>
                                <p>We may display ads from services like Google AdSense, which may use cookies to personalize ads based on browsing activity.</p>
                                <p>You can opt out via <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">Google Ad Settings</a>.</p>

                                <h5>b. Analytics Tools</h5>
                                <p>We may use Google Analytics to track user interactions on our website.</p>

                                <h4>3. Third-Party Services & External Links</h4>
                                <p>Our website may contain links to third-party websites. We are not responsible for their privacy policies or content.</p>

                                <h4>4. Data Security</h4>
                                <p>Although we do not store personal data, we take basic security measures for a safe browsing experience.</p>

                                <h4>5. Children's Privacy</h4>
                                <p>Our website is not intended for children under 13, and we do not knowingly collect any personal information from minors.</p>

                                <h4>6. Your Privacy Choices & Rights</h4>
                                <p>You can manage or disable cookies through your browser settings.</p>

                                <h4>7. Changes to This Privacy Policy</h4>
                                <p>We may update this policy from time to time. Any changes will be posted here with an updated effective date.</p>

                                <h4>8. Contact Us</h4>
                                <p>If you have any questions, contact us at:</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Privacy
