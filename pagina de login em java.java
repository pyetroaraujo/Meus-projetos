import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class LoginPage extends JFrame implements ActionListener {
    private JTextField userField;
    private JPasswordField passField;
    private JButton loginButton;

    public LoginPage() {
        setTitle("Login");
        setSize(300, 150);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null); // Centraliza a tela

        // Painel principal
        JPanel panel = new JPanel(new GridLayout(3, 2, 5, 5));

        // Usuário
        panel.add(new JLabel("Usuário:"));
        userField = new JTextField();
        panel.add(userField);

        // Senha
        panel.add(new JLabel("Senha:"));
        passField = new JPasswordField();
        panel.add(passField);

        // Botão
        loginButton = new JButton("Entrar");
        loginButton.addActionListener(this);
        panel.add(new JLabel()); // espaço vazio
        panel.add(loginButton);

        add(panel);
        setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        String usuario = userField.getText();
        String senha = new String(passField.getPassword());

        if(usuario.equals("admin") && senha.equals("123")) {
            JOptionPane.showMessageDialog(this, "Login bem-sucedido!");
        } else {
            JOptionPane.showMessageDialog(this, "Usuário ou senha incorretos.");
        }
    }

    public static void main(String[] args) {
        new LoginPage();
    }
}
