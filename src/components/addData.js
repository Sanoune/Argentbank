const addEmployees = (employees) => {
  // Récupérer les employés existants dans le localStorage
  const existingEmployees = JSON.parse(localStorage.getItem("employees")) || [];

  // Ajouter les nouveaux employés à la liste existante
  const updatedEmployees = [...existingEmployees, ...employees];

  // Mettre à jour le localStorage avec la nouvelle liste d'employés
  localStorage.setItem("employees", JSON.stringify(updatedEmployees));

  // Retourner la liste mise à jour (optionnel, dépend de votre besoin)
  return updatedEmployees;
};
export default addEmployees;
// Appeler la fonction pour ajouter le tableau initial d'employés
